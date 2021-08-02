const Employee = require('./employee');

class Engineer extends Employee {
        constructor(id, name, email, github) {
                super(id, name, email)
                this.github = github

        }
        
        getRole() {
                return "Engineer"
        }
        getGithub() {
                return this.github
        }
        getIcon() {
                return "fa-code"
        }
}

module.exports = Engineer