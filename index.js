const fs = require('fs');

const inquirer = require('inquirer');
// classes and subclasses to contain the info that will be passed through to the createHTML fxn
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// installed jest, inquirer and express

// empty array to contain the inputs from each series of prompts
const employeePool = [];

// importing generateProfile.js
const generate = require('./src/generateProfile');

// prompt to cycle through the employee types
function nextEmpPrompt() {
    return inquirer.prompt([
        {
            type: "list",
            name: "job",
            choices: ["Intern", "Engineer", "Finish building my team."]
        },
    ])
        .then((answers) => {
            if (answers.job === "Intern") {
                promptIntern();
            } else if (answers.job === "Engineer") {
                promptEngineer();
            } else {
                generate.createHTML(employeePool);
                console.log("Dream team assembled")
            }
        })
};

// manager prompts using inquirer
function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNo",
            message: "What's the manager's office number?"
        },
    ])

        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);

            employeePool.push(manager)
            nextEmpPrompt();
        })

};

// intern prompts using inquirer
function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What's the name of the intern's school?"
        },
    ])


        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeePool.push(intern)

            console.log("Look at all them interns")
            nextEmpPrompt();

        })
};

// engineer prompts using inquirer
function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer's github profile?"
        },
    ])


        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeePool.push(engineer)

            console.log("Look at all them engineers")
            nextEmpPrompt();


        })
};

// Function call to initalize app
promptManager()
