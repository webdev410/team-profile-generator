const Employee = require('./Employee');

class Engineer extends Employee {
        constructor(id, name, email, github) {
                super(id, name, email)
                this.github = github

        }
        getId() {
                return this.id
        }
        getName() {
                return this.name
        }
        getEmail() {
                return this.email
        }
        getGithub() {
                return this.github
        }
        getRole() {
                return "Engineer"
        }
        getIcon() {
                return "fas fa-code"
        }
}

module.exports = Engineer