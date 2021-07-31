const inquirer = require('inquirer');
const fs = require('fs')
const generateHtml = require('./util/generateHtml')
const Employee = require('./lib/employee')


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
                        else {
                                writeToFile()
                        }
                })


}


function addEngineer() {
        return inquirer.prompt([
                {
                        type: 'input',
                        message: 'Engineer Name:',
                        name: 'engName',
                },
        ])
           



}
function addIntern() {
        console.log('add intern')
}


function writeToFile(fileName, response) {
        console.log('write to html')
        fs.writeFile(fileName, generateHtml(response), (error) => { /* handle error */ });
}

function init() {
        promptUser()
                .then(() => askToAdd())
        //   .then((response) => writeToFile('team.html', response))
}



init() // collect manager info and call asktoadd()

// addEngineer() // collect Engineer info and call askToAdd()
// addIntern()
// askToAdd() // ask if engineer intern or done
        // if engineer - call addEngineer()
        // if intern - call addIntern()
        // if done - write to HTML
