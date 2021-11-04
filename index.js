const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./generateProfile.js');
// installed jest, inquirer and express


const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: "Enter your name",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter their ID number",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email",
    }

]
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

// The other three classes will extend `Employee`.
class Employee {
    constructor() {
        this.name = name;
        this.id = id;
        this.message = message;
    }
    // getRole(Employee)
}
const name = new Employee(name, id, message);

class Intern {
    constructor() {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.message = employeeInfo.message;
    }
    // getRole(Intern)
}
// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`
class Manager {
    constructor() {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.message = employeeInfo.message;
    }
    // getRole(Manager)
}
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`
class Engineer {
    constructor() {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.message = employeeInfo.message;
        this.school = 
    }
    // getRole(Engineer)
}
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole(Engineer)`&mdash;overridden to return `'Engineer'`

const empl1 = new Employee("jack", 10, "this is my message");


// getName()

console.log(empl1);
// getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'
console.log(employeeInfo);
console.log(Employee);

// and a function to write the README file:
function writeToFile(data) {
    const testPg = generateProfile(data);
    fs.writeFile('test.html', testPg, (err) =>
        err ? console.log(err) : console.log('Team Profile Generator Created!')
    );
}

// we want a function to start the inquirer
function init() {
    inquirer
        .prompt(employeeInfo)
        .then((data) => {
            console.log(data);
            writeToFile(data);
        })
}

init();
