const Manager = require("../lib/Intern.js");

describe("getOfficeNumber()", () => {
    it("should store the manager name", () => {
        const manager = new Manager("Mardock", 011, "test@gmail.com", "1");
        expect(manager.getOfficeNumber()).toBe("");
    });
});

describe("getRole()", () => {
    it("should store the manager name", () => {
        const manager = new Manager("Mardock", 011, "test@gmail.com", "Manager");
        expect(manager.getRole()).toBe("Intern");
    });
});