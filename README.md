# webpack loader that transforms a stylesheet into a Radium-compatible JS object

Everyone loves using inline styles. But not all React components support them.

If you are using a third party component that does not support inline styles you can either:

* Add styles for the third party component to a global stylesheet.
* Use Radium's [`Style`](https://github.com/FormidableLabs/radium/tree/master/docs/api#style-component) component.

The first option adds more rules to your global styles and separates those rules
from the component you are styling. That's not very cool.

The second option lets you write CSS rules for your third party component right where that
component is being used. But if you're copy-and-pasting rules from native CSS, you
then have to rewrite them in the Radium-compatible JS object format. [css-to-radium](https://github.com/FormidableLabs/css-to-radium) helps,
but is a command line utility that must then somehow be incorporated into your build process.

That's where this module comes in. radium-loader wraps css-to-radium and provides its
functionality as a webpack loader, enabling you to `require()` a stylesheet and get a
Radium-compatible JS object in return.


## Installation

```
$ npm install radium-loader --save-dev
```

## Usage

Chain after [css-loader](https://github.com/webpack/css-loader):

```
var radiumObject = require('radium!css!./stylesheet.css');

var Radium = require('radium');
var Style = Radium.Style;

var Component = React.createClass({
    render() {
        return (
            <Style rules={ radiumObject } />
        );
    }
});
```

## Testing

```
npm test
```

Observe there are no errors in the console.

## License

MIT
