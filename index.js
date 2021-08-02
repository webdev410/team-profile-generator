const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const render = require('./util/generateHtml')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html")
const team = []
const idArray = []

function init() {
        promptUser()
        // .then(() => askToAdd())
        // .then(() => console.log('here'))
        //   .then((response) => writeToFile('team.html', response))
}

const promptUser = () => {
        return inquirer.prompt([
                {
                        type: 'input',
                        message: 'Manager Name: ',
                        name: 'mgrName',

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
                .then((response) => {
                        newManager = new Manager(response.mgrId, response.mgrName, response.mgrEmail, response.mgrOfficeNum)
                        team.push(newManager)
                        idArray.push(response.mgrId)
                        askToAdd()
                })
}

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


        this.getEngineer = () => {
                return inquirer.prompt([
                        {
                                type: 'input',
                                message: 'Engineer Name: ',
                                name: 'engName'
                        },
                        {
                                type: 'input',
                                message: 'Engineer ID: ',
                                name: 'engId',
                                validate: data => {
                                        const a = data.match(/^[1-9]\d*$/)
                                        if (a) {
                                                if (idArray.includes(data)) {
                                                        return "This ID is already in use. Please select a different ID."
                                                } else {
                                                        return true
                                                }
                                        }
                                        return "ID's should be greater than zero."
                                }
                        },
                        {
                                type: 'input',
                                message: 'Engineer Email: ',
                                name: 'engEmail'
                        },
                        {
                                type: 'input',
                                message: 'GitHub Username: ',
                                name: 'engGithub',
                        },

                ])
                        .then((response) => {
                                newEngineer = new Engineer(response.engId, response.engName, response.engEmail, response.engGithub)
                                team.push(newEngineer)
                             
                                idArray.push(response.engId)
                        })
        }

        getEngineer()
                .then(askToAdd)

}
function addIntern() {
        let newIntern
        console.log('add intern function')
        this.getIntern = () => {
                return inquirer.prompt([
                        {
                                type: 'input',
                                message: 'Intern Name: ',
                                name: 'intName'
                        },
                        {
                                type: 'input',
                                message: 'Intern ID: ',
                                name: 'intId',
                                validate: data => {
                                        const a = data.match(/^[1-9]\d*$/)
                                        if (a) {
                                                if (idArray.includes(data)) {
                                                        return "This ID is already in use. Please select a different ID."
                                                } else {
                                                        return true
                                                }
                                        }
                                        return "ID's should be greater than zero."
                                }
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
                                newIntern = new Intern(response.intId, response.intName, response.intEmail, response.intSchool)
                                team.push(newIntern)
                                
                                idArray.push(response.intId)
                        })
        }

        getIntern()
                .then(askToAdd)
}


function writeToFile(response) {
        console.log('write to file function')
        
        //if file location exists, write file, if not, create directory and then run the function 
        if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(team), "utf-8");
}





init() // collect manager info and call asktoadd()

// addEngineer() // collect Engineer info and call askToAdd()
// addIntern()
// askToAdd() // ask if engineer intern or done
        // if engineer - call addEngineer()
        // if intern - call addIntern()
        // if done - write to HTML
 