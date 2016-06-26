var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
// webpack 编译的output 路径为 path + filename
// 请求静态资源虚拟路径地址 publicPath + filename
module.exports = {
  entry: {
    activities1: [
      "webpack-dev-server/client?http://127.0.0.1:3002", // WebpackDevServer host and port
      "webpack/hot/dev-server",
      "./app/activities1/index.js"
    ],
    activities2: [
      "webpack-dev-server/client?http://127.0.0.1:3002",
      "webpack/hot/dev-server",
      "./app/activities2/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, "public/"),
    // 静态资源虚拟路径地址 publicPath + filename
    // publicPath: "public/assets/"
    publicPath: "http://localhost:3002/public/",
    filename: "[name]/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
      { test: /\.(png|jpg|gif)$/, loader: "url-loader", query: { limit: 5000, context: 'app/', name: '[path][name].[ext]' } },
      // 添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
      //在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下。
      // { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" },
      // { test: /\.(html|tpl)$/, loader: 'html-loader' },
    ]
  },
  devServer: {
    //选项指定服务器静态资源的路径
    contentBase: './app/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name]/bundle.css", { allChunks: true })
  ]
};
