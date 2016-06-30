var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
module.exports = {
  entry: {},
  output: {
    path: path.join(__dirname, "public/"),
    filename: "${projectName}/[name]/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
        query: {limit: 5000, context: '${projectName}/', name: '[path][name].[ext]'}
      }
    ]
  },
  devServer: {
    //选项指定服务器静态资源的路径
    contentBase: './${projectName}/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("activities/[name]/bundle.css", {allChunks: true})
  ]
};
