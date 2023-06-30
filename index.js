// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');
const { stringify } = require("querystring");

// TODO: Create an array of questions for user input
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
        message: 'choose license: ',
        choices: ['MIT', 'Apache', 'Mozilla Public', 'The Unlicence'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>
    {
        console.log(data)
        writeToFile('./README.md', generateMarkdown(data))
    });
    
}

// Function call to initialize app
init();
