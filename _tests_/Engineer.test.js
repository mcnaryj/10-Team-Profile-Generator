const Engineer = require("../lib/Engineer.js");

describe("getGithub()", () => {
    it("should store the engineer's github", () => {
        const engineer = new Engineer("Mardock", "011", "test@gmail.com", "github.com");
        expect(engineer.getGithub()).toBe("github.com");
    });
});

describe("getRole()", () => {
    it("should store the engineer name", () => {
        const engineer = new Engineer("Mardock", "011", "test@gmail.com", "Engineer");
        expect(engineer.getRole()).toBe("Engineer");
    });
});