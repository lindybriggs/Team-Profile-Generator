const fs = require('fs');
const inquirer = require('inquirer')

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
        .then(response => response)
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
        .then(response => {
            console.log(response)
            if (response.confirmAdd) {
                addEmployee()
            } else process.exit()
            // writeFile here instead of exit
        })
}

function checkConfirm(response) {
    console.log(response);
    if (response.confirmAdd) {
        return addEmployee()
    } else return process.exit()
}

addManager()
    .then(checkConfirm)
    .catch(err => { console.log(err); });