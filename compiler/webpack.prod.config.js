'use strict';

var webpack = require('webpack');

module.exports = function (webPackProdConfig) {

  // plugins for production
  webPackProdConfig.plugins = webPackProdConfig.plugins.concat([
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BROWSER': JSON.stringify(true),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  ]);
  webPackProdConfig.output.publicPath = "http://css.40017.com/webapp/";

  return webPackProdConfig;
};
