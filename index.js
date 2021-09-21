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
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
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
    connection.query('SELECT * FROM employee', (err, res) => {
        console.table(res);
        promptUser();
    })
}

const addDepartment = () => {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "What's the department name you would like to add?"
    })
        .then(data => {
            const newDepartment = data.department
            connection.query(`INSERT INTO department SET ?`, { name: newDepartment }, (err, res) => {
                if (err) throw err;
                // console.table(res);
                viewAllDepartments();
            })
        })

}

const addRole = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        const departmentArr = []
        console.log(typeof res);
        const x = res.map((department, index) => {
            console.log(department, index)
            departmentArr.push(department.id + ". " + department.name)
        })
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What's the role title you would like to add?"
            },
            {
                type: "input",
                name: "salary",
                message: "What's the role salary you would like to add?"
            },
            {
                type: "list",
                name: "department",
                message: "Please choose a department",
                choices: departmentArr
            }
        ])
            .then(data => {
                console.log(data)
                const departmentId = data.department.split(". ")[0]
                console.log(departmentId)
            })
    })
}


connection.connect(err => {
    if (err) throw err;
    promptUser();
})
