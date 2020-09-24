const { default: Axios } = require("axios");
// Will need to have inquirer to ask user questions and validate answers
// Axios will be used for http requests

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generate = require("./utils/generateMarkdown")

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
        message: "Describe how your project is used."
    },
    // {
    //     // Should license option be provided or have user select license?
    //     type: "input",
    //     name: "license",
    //     message: " "
    // },
    {
        type: "input",
        name: "contributing",
        message: "Enter any additional contributors to your project."
        // Full names or Github usernames? Able to list multiple contributors?
    },
    {
        // What type of tests?
        type: "input",
        name: "test",
        message: "Tests?"
    },
    {
        // Contact via Github or email? Should option be presented to user?
        type: "input",
        name: "question",
        message: "In case of questions, what is your contact information?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    }
    // How to ask user to provide badges?
    // How to ask user to provide link to project on Github?
    // How to ask user to provide link to live app?
    // How to ask user to provide links to screenshots/GIFs/videos?
    // Is "question" able to link to Github username?
    
];

// function to write README file
// need to create a seperate file to write the data into
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {

        //Use axios to request user repo data from GitHub API
        axios.get(https://api.github.com/users + username).then(response => {
        
    })
    }
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


