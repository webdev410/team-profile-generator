const Engineer = require('../lib/Engineer')

test("Can set GitHub Username", () => {
        const git = "webdev410"
        const x = new Engineer(1, "Andrew", "webdev410@gmail.com", git)
        expect(x.github).toBe(git)
})
test("Test getGithub() function", () => {
        const git = "webdev410"
        const x = new Engineer(1, "Andrew", "webdev410@gmail.com", git)
        expect(x.getGithub()).toBe(git)
})
test("Test getRole() function", () => {
        const x = new Engineer(1, "Andrew", "webdev410@gmail.com", "webdev410")
        expect(x.getRole()).toBe("Engineer")
})