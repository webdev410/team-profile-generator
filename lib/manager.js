const Employee = require ('./employee');

class Manager extends Employee {
        constructor(officeNumber) {
                this.officeNumber = officeNumber

                super(name, id, email)

        }
        getRole() {
                return Manager
        }
}


