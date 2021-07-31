class Employee {
        constructor (name, email, id) {
                this.name = name;
                this.email = email;
                this.id = Math.floor(Math.random() * 99) + 1;
                this.id = id
               
        }
        getName() {
                console.log(`Name: ${this.name}`)
        }
        getId() {
                console.log(`ID: ${this.id}`)
        }
        getEmail() {
                console.log(`Email: ${this.email}`)
        }
        getRole() {
                return Employee

        }
}

module.exports = Employee

