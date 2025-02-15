// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README file has been created successfully!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
        const markdown = generateMarkdown(answer)
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
