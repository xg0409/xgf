var path = require('path');
module.exports = {

    options: {
        projectRoot: './',
        devServer: {
            host: 'localhost',
            port: 10086,
            publicPath: 'http://localhost:10086/public/'
        }
    },


    projects: {
        app: {
            _metaInfo: {
                // 是否自动生成index.html到模块默认true
                genIndexHtml: true,
                version: ''
            },
            ms_pull_new: {
                _metaInfo: {
                    version: '',
                    getIndexHtml: true
                },
                match: '',
                entry: './app/ms_pull_new/index.js',
                jsBundles: [],
                cssBundles: []
            },
            snap_up_center: {
                _metaInfo: {
                    version: '',
                    getIndexHtml: true
                },
                match: '',
                entry: './app/snap_up_center/index.js',
                jsBundles: [],
                cssBundles: []
            },
            get_coupon: {
                _metaInfo: {
                    version: '',
                    getIndexHtml: true
                },
                match: '',
                entry: './app/get_coupon/index.js',
                jsBundles: [],
                cssBundles: []
            }
        },
        app2: {
            _metaInfo: {
                // 是否自动生成index.html到模块默认true
                genIndexHtml: true,
                version: ''
            },
            ms_pull_new2: {
                _metaInfo: {
                    version: '',
                    getIndexHtml: true
                },
                match: '',
                entry: './app/ms_pull_new/index.js',
                jsBundles: [],
                cssBundles: []
            },
            snap_up_center2: {
                _metaInfo: {
                    version: '',
                    getIndexHtml: true
                },
                match: '',
                entry: './app/snap_up_center/index.js',
                jsBundles: [],
                cssBundles: []
            },
            get_coupon2: {
                _metaInfo: {
                    version: '',
                    getIndexHtml: true
                },
                match: '',
                entry: './app/get_coupon/index.js',
                jsBundles: [],
                cssBundles: []
            }
        }
    }
};
