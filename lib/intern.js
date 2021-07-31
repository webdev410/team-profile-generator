const Employee = require('./employee');

class Intern extends Employee {
        constructor(name, id, email, school) {
                this.school = school
                this.name = name
                this.id = id
                this.email = email

        }
        getSchool(school) {
                


        }
        getRole() {
                return Intern
        }
}
