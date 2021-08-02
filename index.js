const inquirer = require('inquirer');
const fs = require('fs')
const generateHtml = require('./util/generateHtml')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const team = []
var id = 0

function init() {
        promptUser()
                .then(() => askToAdd())
        // .then(() => console.log('here'))
        //   .then((response) => writeToFile('team.html', response))
}

const promptUser = () => {
        return inquirer.prompt([
                {
                        type: 'input',
                        message: 'Manager Username: ',
                        name: 'mgrUsername',

                },
                {
                        type: 'input',
                        message: 'Manager Employee ID: ',
                        name: 'mgrId',

                },
                {
                        type: 'input',
                        message: 'Manager Email: ',
                        name: 'mgrEmail',

                },
                {
                        type: 'input',
                        message: 'Manager Office Number: ',
                        name: 'mgrOfficeNum',

                },
        ])
}
var id = 0

const askToAdd = () => {
        return inquirer.prompt([
                {
                        type: 'list',
                        message: 'What would you like to do?',
                        choices: ['Add Engineer', 'Add Intern', 'Done'],
                        name: 'do',
                },
        ])
                .then((response) => {
                        if (response.do === 'Add Engineer') {
                                addEngineer()
                        }
                        if (response.do === 'Add Intern') {
                                addIntern()
                        }
                        if (response.do === 'Done') {
                                writeToFile()
                        }
                })
}

function addEngineer(id, name, email, github) {
        let newEngineer

        id = team.length;
        this.name = name
        this.email = email
        this.github = github

        this.getEngineer = () => {
                return inquirer.prompt([
                        {
                                type: 'input',
                                message: 'Engineer Name: ',
                                name: 'engName'
                        },
                        {
                                type: 'input',
                                message: 'Engineer Email: ',
                                name: 'engEmail'
                        },
                        {
                                type: 'input',
                                message: 'GitHub Username: ',
                                name: 'engGithub'
                        },

                ])
                        .then((response) => {
                                newEngineer = new Engineer(id + 1, response.engName, response.engEmail, response.engGithub)
                                team.push(newEngineer)
                                console.log(team)
                        })
        }

        getEngineer()
                .then(askToAdd)

}
function addIntern() {
        console.log('add intern')
        this.getIntern = () => {
                return inquirer.prompt([
                        {
                                type: 'input',
                                message: 'Intern Name: ',
                                name: 'intName'
                        },
                        {
                                type: 'input',
                                message: 'Intern Email: ',
                                name: 'intEmail'
                        },
                        {
                                type: 'input',
                                message: 'Intern School: ',
                                name: 'intSchool'
                        },

                ])
                        .then((response) => {
                                console.log(response.intName)


                        })
        }

        getIntern()

                .then(askToAdd)
}


function writeToFile(response) {
        console.log('write to html function')
        console.log(response)
        // fs.writeFile(fileName, generateHtml(response), (error) => { /* handle error */ });
}





init() // collect manager info and call asktoadd()

// addEngineer() // collect Engineer info and call askToAdd()
// addIntern()
// askToAdd() // ask if engineer intern or done
        // if engineer - call addEngineer()
        // if intern - call addIntern()
        // if done - write to HTML
