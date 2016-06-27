var projectInfo = require('./projectsInfo.js');
var initPromptConfig = require('./initPromptConfig.js');

var initBuild = function (grunt) {

    /**
     * grunt-prompt task
     * demo:https://github.com/xg0409/grunt-prompt-demo
     */
    grunt.registerTask('prod-build', 'production build task', function () {
        var prodBuild = {
            options: {
                questions: initPromptConfig.questions,
                then: function (results, done) {
                    console.log('xg:', results);
                }
            }
        }

        grunt.config.set('prompt', {
            prodBuild: prodBuild
        });
        grunt.task.run(['prompt:prodBuild']);
    });


    grunt.registerTask('dev-build', 'develop build task', function () {
        var devBuild = {
            options: {
                questions: initPromptConfig.questions,
                then: function (results, done) {
                    console.log('xg:', results);
                }
            }
        }

        grunt.config.set('prompt', {
            devBuild: devBuild
        });
        grunt.task.run(['prompt:devBuild']);
    });
}


module.exports = {
    initBuild: initBuild
};
