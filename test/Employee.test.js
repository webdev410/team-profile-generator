const Employee = require('../lib/Employee')

test("Can create new Employee object", () => {
        const x = new Employee();
        expect(typeof (x)).toBe("object")
})

test("Can set Employee ID", () => {
        const id = 1
        const x = new Employee(id)
        expect(x.id).toBe(id)
})

test("Can set Employee Name", () => {
        const name = "Andrew"
        const xx = new Employee("1", name)
        expect(xx.name).toBe(name)
})


test("Can set Employee Email", () => {
        const email = "webdev410@gmail.com"
        const x = new Employee(1, "Andrew", email)
        expect(x.email).toBe(email)
})

test("Test for getName() function", () => {
        const name = "Andrew"
        const x = new Employee(1, name)
        expect(x.getName()).toBe(name)
})

test("Test for getEmail() function", () => {
        const email = "webdev410@gmail.com"
        const x = new Employee(1, "Andrew", email)
        expect(x.getEmail()).toBe(email)
})

test("Test for getRole() function", () => {
        const x = new Employee()
        expect(x.getRole()).toBe("Employee")
})