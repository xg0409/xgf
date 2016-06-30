module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config.js");
  grunt.initConfig({

    webpack: {
      options: webpackConfig,
      build: {
        plugins: webpackConfig.plugins.concat(
          //definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
          new webpack.DefinePlugin({
            "process.env": {
              // This has effect on the react lib size
              "NODE_ENV": JSON.stringify("production")
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
          })
        ),
        output: {
          publicPath:"http://css.40017.com/webapp/"
        }
      },
      "build-dev": {
        devtool: "sourcemap",
        debug: true
      }
    },
    "webpack-dev-server": {
      options: {
        webpack: webpackConfig,
        publicPath: webpackConfig.output.publicPath,
        // 基于项目目录静态资源路径
        contentBase: webpackConfig.devServer.contentBase
      },
      start: {
        keepAlive: true,
        hot: true,
        historyApiFallback: true,
        host: "localhost",
        port: 3002,
        webpack: {
          devtool: "eval",
          debug: true
        }
      }
    },

    nodemon: {
      server: {
        script: './bin/app.js',
        options: {
          nodeArgs: [ /*'--debug' */ ],
          ignore: ['node_modules/**'],
          env: {
            PORT: 8090,
            // for development, isomorphic server rendering
            NODE_ENV: '',
            DEBUG: 'projects:*,',
            DEBUG_COLORS: true,
          },
          ext: 'js,jsx,html,ejs',
        }
      }
    }
  });

  require('./compiler')(grunt);

  // The development server (the recommended option for development)
  grunt.registerTask("default", ["webpack-dev-server:start"]);

  grunt.registerTask("dev", ["webpack:build-dev"]);

  // Production build
  grunt.registerTask("build", ["webpack:build"]);

  grunt.registerTask('server', ['nodemon:server']);
};
