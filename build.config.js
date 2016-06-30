var path = require('path');
module.exports = {

  options: {
    projectRoot: './projects',
    projectName:'projects',
    devServer: {
      host: 'localhost',
      port: 10086,
      publicPath: 'http://localhost:10086/public/'
    }
  },

  projects: {
    activities: {
      _metaInfo: {
        // 是否自动生成index.html到模块默认true
        genIndexHtml: true,
        version: ''
      },
      activities1: {
        _metaInfo: {
          version: '',
          getIndexHtml: true
        },
        match: 'activities/activities1/views/index.html',
        entry: './projects/activities/activities1/index.js',
        jsBundles: [],
        cssBundles: []
      },
      activities2: {
        _metaInfo: {
          version: '',
          getIndexHtml: true
        },
        match: 'activities/activities2/views/index.html',
        entry: './projects/activities/activities2/index.js',
        jsBundles: [],
        cssBundles: []
      }
    },
    dialogs:{
      _metaInfo: {
        // 是否自动生成index.html到模块默认true
        genIndexHtml: true,
        version: ''
      },
      message: {
        _metaInfo: {
          version: '',
          getIndexHtml: true
        },
        match: '',
        entry: './projects/dialogs/message/index.js',
        jsBundles: [],
        cssBundles: []
      }
    }
  }
};
