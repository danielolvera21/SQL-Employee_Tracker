const inquirer = require('inquirer');
const connection = require('./db/connection')
const cTable = require('console.table')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']

        }
    ]).then(data => {
        switch (data.action) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            default:
                console.log("Exiting")
                process.exit();
        }
    })
}

const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        console.table(res);
        promptUser();
    })
}

const viewAllRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        console.table(res);
        promptUser();
    })
}

const viewAllEmployees = () => {
    connection.query('SELECT * FROM employees', (err, res) => {
        console.table(res);
        promptUser();
    })
}

connection.connect(err => {
    if (err) throw err;
    promptUser();
})
