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
    
<div class="row row-cols-1 row-cols-md-2">\n`


//creating new cards
const generateHTML = (employeePool) => {
    //loop through employee array and create a card
    //each card within a backtick, take all of that content and do += to that variable we have above
    //at the end of that loop, += the ending code
    employeePool.forEach(element => {
        htmlContent += ` <div>
    <div>
      <div>
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
            <div>
              <ul>
                <li>ID: ${element.getId()}</li>
                <li>Email:<a href = "mailto: ${element.getEmail()}"> ${element.getEmail()}</a></li>\n`
        if (element.getRole() === "Manager") {
            htmlContent += `Office Number: ${element.getOfficeNumber()}</li>\n`
        } else if (element.getRole() === "Engineer") {
            htmlContent += `<li>GitHub Profile: ${element.getGitHub()}</a></li>\n`
        } else if (element.getRole() === "Intern") {
            htmlContent += `<li>School: ${element.getSchool()}</li>\n`
        }
        htmlContent
    });

    htmlContent += `</div></body></html>`

    fs.writeFileSync('./src/sampleHTML.html', htmlContent);

    console.log("Nice job creating your team. Head over to sampleHTML.html.")

}



module.exports = {
    generateHTML,
};