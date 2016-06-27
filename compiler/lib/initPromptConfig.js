var projecstInfo = require('./projectsInfo.js');
function initPromptConfig() {
    var projectsConfig = projecstInfo.projects;
    var questions = [];

    var projectConfig = {
        config: 'project_item',
        type: 'list',
        message: 'Which project would you like to build ?',
        choices: [
            {
                value: 'build_all_projects',
                name: 'build_all_projects'
            }]
    };

    Object.keys(projectsConfig).forEach(function (projectName) {
        projectConfig.choices.push({
            name: projectName,
            value: projectName
        })
    });

    questions.push(projectConfig);

    Object.keys(projectsConfig).forEach(function (projectName) {
        var submoduleObject = {
            config: projectName + '_project_' + "submodule",
            type: 'list',
            message: 'select ' + projectName + ' project submodule',
            when: function (answers) {
                var answer = answers['project_item'];
                return answer === projectName;
            },
            choices: []
        };

        Object.keys(projectsConfig[projectName]).forEach(function (submodule) {
            if (submodule == "_metaInfo")return;
            submoduleObject.choices.push({
                name: submodule,
                value: submodule
            });
        });
        questions.push(submoduleObject);

    });


    return {
        questions:questions
    };

}

module.exports = initPromptConfig();