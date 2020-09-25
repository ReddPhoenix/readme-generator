// Will need to have inquirer to ask user questions and validate answers
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how your project is used:"
    },
    {
        type: "input",
        name: "license",
        message: "What license are you using? "
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter any additional contributors to your project."
        // Full names or Github usernames? 
    },
    {
        type: "input",
        name: "test",
        message: "How do you run tests?"
    },
    {
        type: "input",
        name: "question",
        message: "In case of questions, what is your contact information? (sample@email.com)"
    },
    {
        type: "input",
        name: "badge",
        message: "Enter link to badge(s):"
    }
];



// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);

        // function to write README file
        // need to create a seperate file to write the data into
        fs.writeFile("README.md", generateMarkdown(answers), function (err) {
            if (err) {
                throw err;
                }
            console.log("README Created!")
            });

        });
    }

// function call to initialize program
init();


// Generated README will require the following:
// *Title
// *Description
// *Table of Contents
// *Installation
// *Usage
// *License
// *Contributing
// *Tests
// *Questions

// *Generated README will include 1 badge specific to the repository


