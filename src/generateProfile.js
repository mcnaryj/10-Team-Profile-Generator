const fs = require('fs');

var htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./Assets/style.css">
    <title>Team Generator</title>
</head>
<body>
    <header>My Team</header>
    <div class="row row-cols-3 row-cols-md-2">\n`
const createHTML = (employeePool) => {
    employeePool.forEach(element => {
        htmlContent += `</div>
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
        } else if (element.getRole() === "Engineer") {
            htmlContent += `<li class="list-group-item"> GitHub Profile: ${element.getGithub()}</a></li>\n`
        } else if (element.getRole() === "Intern") {
            htmlContent += `<li class="list-group-item"> School: ${element.getSchool()}</li>\n`
        }
    });
    htmlContent += `</ul>
    </div >
    </div > `

    fs.writeFileSync('./src/sampleHTML.html', htmlContent);
    console.log("Your team has been successfully created. Head over to sampleHTML.html.")

}



module.exports = {
    createHTML,
};