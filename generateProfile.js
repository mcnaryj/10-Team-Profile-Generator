const fs = require('fs');

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
// adding a badge to the top of the readme (line 49)
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the syntax on line 76-78:
// ```md
// ![alt text](assets / images / screenshot.png)
//     ```

// exporting the function
module.exports = generateProfile;