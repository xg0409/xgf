var projectInfo = require('./projectsInfo.js');
var initPromptConfig = require('./initPromptConfig.js');

var promptTasks = function (grunt) {

    /**
     * grunt-prompt task
     * demo:https://github.com/xg0409/grunt-prompt-demo
     */
    grunt.registerTask('prod-build', 'production build task', function () {
        var devBuild = {
            options: {
                questions: initPromptConfig.questions,
                then: function (results, done) {
                    console.log('xg:', results);
                }
            }
        }

        grunt.config.set('prompt', {
            prodBuild: devBuild
        });
        grunt.task.run(['prompt:prodBuild']);
    });
}


module.exports = {
    promptTasks: promptTasks
};
