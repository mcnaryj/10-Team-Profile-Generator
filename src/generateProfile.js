const fs = require('fs');

let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./Assets/style.css">
    <title>Team Generator</title>
</head>
<body>
    <header>My Team</header>
    <main>
    <div class="row row-cols-1 row-cols-md-2">`
const createHTML = (employeePool) => {
    employeePool.forEach(element => {
        htmlContent += `<div class="col mb-4">
    <div class="card">
        <div class="card-header">
            ${element.getName()} <br>\n`
        if (element.getRole() === "Manager") {
            htmlContent
        } else if (element.getRole() === "Engineer") {
            htmlContent
        } else if (element.getRole() === "Intern") {
            htmlContent
        }
        htmlContent += ` ${element.getRole()}
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto: ${element.getEmail()}"> ${element.getEmail()}</a></li>\n`
        if (element.getRole() === "Manager") {
            htmlContent += `<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>\n`
        } else if (element.getRole() === "Intern") {
            htmlContent += `<li class="list-group-item"> School: ${element.getSchool()}</li>\n`
        } else if (element.getRole() === "Engineer") {
            htmlContent += `<li class="list-group-item"> GitHub Profile: ${element.getGithub()}</a></li>\n`

        }
        htmlContent += `</ul>
        </div>
    </div>     
    </div>
    </div> 
    </main> 
    </body> `


    });
    fs.writeFileSync('./dist/teamprofile.html', htmlContent);
    console.log("Your team has been successfully created. Head over to teamprofile.html.")
}

module.exports = {
    createHTML,
};
