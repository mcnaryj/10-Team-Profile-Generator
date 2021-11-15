const Intern = require("../lib/Intern.js");

describe("getSchool()", () => {
    it("should store the intern's school", () => {
        const intern = new Intern("Mardock", 011, "test@gmail.com", "CU");
        expect(intern.getSchool()).toBe("CU");
    });
});

describe("getRole()", () => {
    it("should store the intern role", () => {
        const intern = new Intern("Mardock", 011, "test@gmail.com", "Intern");
        expect(intern.getRole()).toBe("Intern");
    });
});