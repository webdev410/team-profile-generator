const Employee = require('./Employee');

class Intern extends Employee {
        constructor(id, name, email, school) {
                super(id, name, email)
                this.school = school


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
        getSchool() {
                return this.school
        }
        getRole() {
                return "Intern"
        }
        getIcon() {
                return "fa-coffee"
        }
}

module.exports = Intern