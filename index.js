const fs = require('fs');
const buildCards = require('./content');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "You will enter manager info first, please hit enter to begin.",
            name: 'role',
            choices: ['Manger',]
        },
        {
            type: 'input',
            message: 'Who manages this team?',
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the manager's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the manager's office number",
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'confirmAdd',
            default: false,
        },
    ])

        .then(({ name, id, email, officeNumber, confirmAdd } = addManager) => {

            teamArray.push(new Manager(name, id, email, officeNumber))

            if (confirmAdd) {
                console.log(teamArray)
                return addEmployee();
            } else {

                console.log(teamArray)
                buildCards(teamArray)
            }
        }
        )
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Please choose this employee's role",
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: "Please enter employee's name",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the employee's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the employee's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter the engineer's Github username.",
            name: 'github',
            when: input => input.role === "Engineer",
        },
        {
            type: 'input',
            message: "Please enter the intern's school.",
            name: 'school',
            when: input => input.role === "Intern",
        },
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'confirmAdd',
            default: false,
        },
    ])

        .then(({ role, name, id, email, github, school, confirmAdd } = addEmployee) => {
            if (role === "Engineer") {
                teamArray.push(new Engineer(name, id, email, github))
                console.log(teamArray)
            } else {
                teamArray.push(new Intern(name, id, email, school))
                console.log(teamArray)

            }

            if (confirmAdd) {
                addEmployee();
            } else { buildCards(teamArray) }
        }
        )
}


addManager()
    .catch(err => { console.log(err); });
