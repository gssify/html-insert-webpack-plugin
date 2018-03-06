Inject extension for the HTML Webpack Plugin
========================================
[![npm version](https://badge.fury.io/js/html-insert-webpack-plugin.svg)](http://badge.fury.io/js/html-insert-webpack-plugin) [![Dependency Status](https://david-dm.org/gssify/html-insert-webpack-plugin.svg)](https://david-dm.org/gssify/html-insert-webpack-plugin) [![Build status](https://travis-ci.org/gssify/html-insert-webpack-plugin.svg)](https://travis-ci.org/gssify/html-insert-webpack-plugin) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

This is an extension plugin for the [webpack](http://webpack.github.io) plugin [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) - a plugin that simplifies the creation of HTML files to serve your webpack bundles.

Installation
------------
You must be running webpack on node 0.12.x or higher

Install the plugin with npm:
```shell
$ npm install --save-dev html-insert-webpack-plugin
```

Basic Usage
-----------
Require the plugin in your webpack config:

```javascript
var HtmlInsertWebpackPlugin = require('html-insert-webpack-plugin');
```

Add the plugin to your webpack config as follows:

```javascript
plugins: [
  new HtmlWebpackPlugin(),
  new HtmlInsertWebpackPlugin()
]  
```
The above configuration will actually do nothing due to the configuration defaults.