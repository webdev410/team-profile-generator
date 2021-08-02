const Employee = require('./employee');

class Manager extends Employee {
        constructor(id, name, email, officeNumber) {
                super(id, name, email)
                this.officeNumber = officeNumber

        }
        getRole() {
                return "Manager"
        }
        getOfficeNum(){
                return this.officeNumber
        }
        getIcon() {
                return "fa-user-tie"
        }
}


module.exports = Manager