var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var projecstInfo = require('./projectsInfo.js');
var _ = require('lodash');
var webpackConfigJson = require('../webpack.base.config');

var webpackBaseConfig = function (isAllModules, parentModule, submodule) {
  
  var entry = webpackConfigJson.entry;
  var output = webpackConfigJson.output;
  var module = webpackConfigJson.module;
  var devServer = webpackConfigJson.devServer;
  var plugins = webpackConfigJson.plugins;
  var options = projecstInfo.options;
  var projects = projecstInfo.projects;

  var defaultClientConfig = [
    "webpack-dev-server/client?http://${host}:${port}",
    "webpack/hot/dev-server"
  ];
  defaultClientConfig[0] = defaultClientConfig[0].replace("${host}", options.devServer.host);
  defaultClientConfig[0] = defaultClientConfig[0].replace("${port}", options.devServer.port);

  if (isAllModules) {
    Object.keys(projects[parentModule]).forEach(function (projectName) {
      var clientConfig = _.clone(defaultClientConfig);
      if (projectName == "_metaInfo")return;
      var projectObject = projects[parentModule][projectName];
      clientConfig.push(projectObject.entry);
      entry[projectName] = clientConfig;
    });
  } else {
    var clientConfig = defaultClientConfig;
    clientConfig.push(projects[parentModule][submodule].entry);
    entry[submodule] = clientConfig;
  }

  _.extend(output, {
    publicPath: options.devServer.publicPath,
    filename: output.replace("${projectName}", parentModule)
  });

  module = {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
        query: {limit: 5000, context: '{%=parentModule%}', name: '[path][name].[ext]'}
      }
    ]
  };

  devServer = {
    //选项指定服务器静态资源的路径
    contentBase: './app/'
  };


  return {
    entry: entry,
    output: output
  }


};


module.exports = webpackBaseConfig;