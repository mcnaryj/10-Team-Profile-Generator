const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const generateProfile = require('./generateProfile.js');
// installed jest, inquirer and express

managerQueries()

const employeePool = [];

function employeeQuestions() {
    return inquirer.prompt([
        {
            type: "list",
            name: "job",
            choices: ["Intern", "Engineer", "Finish building my team."]
        },
    ])
        .then((answers) => {
            if (answers.job === "Intern") {
                promptInternQuestions();
            } else if (answers.job === "Engineer") {
                promptEngineer();
            } else {
                generate.generateProfile(employeePool);
                console.log("Dream team assembled")
            }
        })
};

function managerQueries() {
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
            const manager = new Manager(answers.managerName, answers.mgnrID, answers.managerEmail, answers.managerOfficeNo);
            console.log("Your team is stacked")
            employeeQuestions();

        })
};

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
            const manager = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            console.log("Look at all them engineers")
            employeeQuestions();

        })
};

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What's the name of the intern's school?"
        },
    ])


        .then((answers) => {
            const manager = new Engineer(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            console.log("Look at all them interns")
            employeeQuestions();

        })
};
// and a function to write the README file:
function writeToFile(data) {
    const testPg = generateProfile(data);
    fs.writeFile('test.html', testPg, (err) =>
        err ? console.log(err) : console.log('Team Profile Generator Created!')
    );
}

// function engineerPrompts() {


// }

// we want a function to start the inquirer
// function init() {
//     inquirer
//         .prompt(employeeInfo)
//         .then((data) => {
//             console.log(data);
//             writeToFile(data);
//         })
// }

// init();
