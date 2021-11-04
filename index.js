const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const fs = require('fs');
const generateProfile = require('./generateProfile.js');
// installed jest, inquirer and express



// so we want to build to build a class called 'Employee', that has the properties of name, id and email.
// within the class, we want to call the methods get name, get id and get email
// using the three of them, we can create a method called 'Get Roll', which will returns that they are an employee
// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`



// getName()


// and a function to write the README file:
function writeToFile(data) {
    const testPg = generateProfile(data);
    fs.writeFile('test.html', testPg, (err) =>
        err ? console.log(err) : console.log('Team Profile Generator Created!')
    );
}

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
