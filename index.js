// TODO: Include packages needed for this application

//File Systems
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");






// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Type your name of the project: ", 
    },
    {
        type: "input",
        name: "description",
        message: "Description of scope and functionality of the project:", 
    },
    {
        type: "input",
        name: "screenshort",
        message: "provide your parth to img:", 
    },
    {
        type: "input",
        name: "link",
        message: "Please paste Deployed URL link here: ", 
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select option button which applicable your project ",
        choices: ["BOOST", "MIT" , "APACHE", "NONE"], 
    },
    {
        type: "input",
        name: "require",
        message: "Provide any project dependencies here:", 
    },
    {
        type: "input",
        name: "features",
        message: "Please describe features about your project", 
    },
    {
        type: "input",
        name: "creator",
        message: "Please enter your GitHub username here:", 
    },{
        type: "input",
        name: "email",
        message: "Please enter your valid email here:", 
    },
    {
        type: "input",
        name: "contributors",
        message: "Provide list of contributores:", 
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
