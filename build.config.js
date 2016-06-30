var path = require('path');
module.exports = {

  options: {
    projectRoot: './projects',
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
        match: '',
        entry: './projects/activities/activities1/index.js',
        jsBundles: [],
        cssBundles: []
      },
      snap_up_center: {
        _metaInfo: {
          version: '',
          getIndexHtml: true
        },
        match: '',
        entry: './projects/snap_up_center/index.js',
        jsBundles: [],
        cssBundles: []
      },
      get_coupon: {
        _metaInfo: {
          version: '',
          getIndexHtml: true
        },
        match: '',
        entry: './projects/get_coupon/index.js',
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
        entry: './projects/ms_pull_new/index.js',
        jsBundles: [],
        cssBundles: []
      }
    }
  }
};
