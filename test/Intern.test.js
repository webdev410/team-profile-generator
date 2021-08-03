const Intern = require('../lib/Intern')

test("Can set school", () => {
        const school = "ASU"
        const x = new Intern(1, "Andrew", "webdev410@gmail.com", school)
        expect(x.school).toBe(school)
})
test("Test getSchool() function", () => {
        const school = "ASU"
        const x = new Intern(1, "Andrew", "webdev410@gmail.com", school)
        expect(x.getSchool()).toBe(school)
})
test("Test getRole() function", () => {
        const x = new Intern(1, "Andrew", "webdev410@gmail.com", "ASU")
        expect(x.getRole()).toBe("Intern")
})