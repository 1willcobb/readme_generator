const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        name: 'title',
        message: 'Project Title: '
    },
    {
        name: 'description',
        message: 'Brief description of project. Explain what, why, and how of project: '
    },
    {
        name: 'installation',
        message: 'Provide any installation instructions: '
    },
    {
        name: 'usage',
        message: 'Instructions on how to use the app: '
    },
    {
        name: 'contribution',
        message: 'Contribution Guidelines: '
    },
    {
        name: 'test',
        message: 'Provide Testing instructions for developers using your app: '
    },
    {
        name: 'license',
        message: 'Choose License: ',
        choices: ['mit', 'apache', 'mozilla', 'none'],
        type: 'list'
    },
    {
        name: 'github',
        message: 'Provide github username: '
    },
    {
        name: 'email',
        message: 'Provide email address for contact: '
    },

];

function writeToFile(fileName, data) {
    const resolved = data
    fs.writeFileSync(fileName, resolved)
}

function init() {
    inquirer.prompt(questions).then((data)=>
    {
        writeToFile('./readme_generated/README_Generated.md', generateMarkdown(data))
    });
    
}

// Function call to initialize app
init();
