const fs = require('fs');

const generateManager = Manager => {
    return `
    <div>
    <div class="manager">
    <h3>${Manager.name}</h3>
    <h3>${Manager.}</h3>
    </div>

    
    
    `
}
// building the html body to display the employees for a given team
module.exports = (employeePool) => {
    const { manager, intern, ...engineer } = employeePool;
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Team Profile Generator</title>
    </head>
    <header>The Team</header>
    <body>
    <main>
    <div>
    ${generateManager(manager)}
    ${generateEngineer(engineer)}
    ${generateIntern(intern)}
    </div>
    </main>
    </body>

    
    
    
    `;
};

module.exports = generateProfile;