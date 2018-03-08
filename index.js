'use strict'

function HtmlInsertWebpackPlugin (options = {}) {
  const defaults = {
    script: '{# webpack_script_placeholder #}',
    style: '{# webpack_style_placeholder #}'
  }
  this.options = Object.assign({}, defaults, options)
}

HtmlInsertWebpackPlugin.prototype.apply = function (compiler) {
  const { options } = this
  compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
      let scriptString, styleString

      if (htmlPluginData.assets.js) {
        scriptString = htmlPluginData.assets.js.reduce((prev, item) => {
          return `${prev}<script src="${item}"></script>`
        }, '')
      }
      if (htmlPluginData.assets.css) {
        styleString = htmlPluginData.assets.css.reduce((prev, item) => {
          return `${prev}<link rel="stylesheet" href="${item}"/>`
        }, '')
      }

      if (~htmlPluginData.html.indexOf(options.style)) {
        htmlPluginData.html = htmlPluginData.html.replace(options.style, styleString)
      }
      if (~htmlPluginData.html.indexOf(options.script)) {
        htmlPluginData.html = htmlPluginData.html.replace(options.script, scriptString)
      }

      callback(null, htmlPluginData)
    })
  })
}

module.exports = HtmlInsertWebpackPlugin
