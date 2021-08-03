const Manager = require('../lib/Manager')

test("Can set OfficeNum", () => {
        const officeNumber = "123"
        const x = new Manager(1, "Andrew", "fake@email.com", officeNumber)
        expect(x.officeNumber).toBe(officeNumber)
})

test("Test getOfficeNum function", () => {
        const officeNumber = "123"
        const x = new Manager(1, "Andrew", "fake@email.com", officeNumber)
        expect(x.getOfficeNum()).toBe(officeNumber)
})

test("Test getRole() function", () => {
        const role = "Manager"
        const x = new Manager(1, "Andrew", "fake@email.com", "123")
        expect(x.getRole()).toBe("Manager")
})