const Employee = require('./Employee');

class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "Intern";
    }

}

module.exports = Intern;