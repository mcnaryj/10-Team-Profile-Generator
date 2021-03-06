const Manager = require("../lib/Manager.js");

describe("getOfficeNumber()", () => {
    it("should store the manager's office number", () => {
        const manager = new Manager("Mardock", "011", "test@gmail.com", "1");
        expect(manager.getOfficeNumber()).toBe("1");
    });
});

describe("getRole()", () => {
    it("should store the manager's role", () => {
        const manager = new Manager("Mardock", "011", "test@gmail.com", "Manager");
        expect(manager.getRole()).toBe("Manager");
    });
});