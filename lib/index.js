import cssToRadium from 'css-to-radium'

export default function(content) {
  if (this.cacheable) {
    this.cacheable()
  }
  content = content.split('\n')
  content[0] = 'exports = require("css-loader/lib/css-base.js")()'
  content = content.join('\n')
  eval(content)
  return `module.exports = ${JSON.stringify(cssToRadium(exports[0][1]))}`
}
