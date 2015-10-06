var cssToRadium = require('css-to-radium');

module.exports = function(content) {
    if (this.cacheable) { this.cacheable(); }
    // Wrangle the result of `css-loader` so that it can be `eval()`ed
    content = content.split('\n');
    content[0] = 'exports = module.exports = require("css-loader/lib/css-base.js")();';
    content = content.join('\n');
    eval(content);
    return "module.exports = " + JSON.stringify(cssToRadium(exports[0][1])) + ";";
};
