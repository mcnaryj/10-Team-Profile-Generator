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
    `
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
            <li class="list-group-item">>ID: ${element.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto: ${element.getEmail()}"> ${element.getEmail()}</a></li>\n`
        if (element.getRole() === "Manager") {
            htmlContent += `<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>\n`
        } else if (element.getRole() === "Engineer") {
            htmlContent += `<li class="list-group-item"> GitHub Profile: ${element.getGithub()}</a></li>\n`
        } else if (element.getRole() === "Intern") {
            htmlContent += `<li class="list-group-item"> School: ${element.getSchool()}</li>\n`
        }
        htmlContent += `</ul>
    </div>
    </div>     
    </div>
    </div>
    </main> 
    </body>`


    });
    fs.writeFileSync('./dist/sampleHTML.html', htmlContent);
    console.log("Your team has been successfully created. Head over to sampleHTML.html.")
}

// const createHTML = (employeePool) => {
//     //loop through employee array and create a card
//     //each card within a backtick, take all of that content and do += to that variable we have above
//     //at the end of that loop, += the ending code
//     employeePool.forEach(element => {
//         htmlText += ` <div class="col mb-4">
//         <div class="card">
//           <div class="card-header">
//                 ${element.getName()} <br>\n`
//         if (element.getRole() === "Manager") {
//             htmlText += `<i class="fas fa-mug-hot"></i>`
//         } else if (element.getRole() === "Engineer") {
//             htmlText += `<i class="fas fa-glasses"></i>`
//         } else if (element.getRole() === "Intern") {
//             htmlText += `<i class="fas fa-user-graduate"></i>`
//         }
//         htmlText += ` ${element.getRole()}
//           </div>
//                 <div class="card-body">
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item">ID: ${element.getId()}</li>
//                     <li class="list-group-item">Email:<a href = "mailto: ${element.getEmail()}"> ${element.getEmail()}</a></li>\n`
//         if (element.getRole() === "Manager") {
//             htmlText += `<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>\n`
//         } else if (element.getRole() === "Engineer") {
//             htmlText += `<li class="list-group-item">GitHub Username: <a href="https://github.com/${element.getGithub()}"`
//         } else if (element.getRole() === "Intern") {
//             htmlText += `<li class="list-group-item">School: ${element.getSchool()}</li>\n`
//         }
//         htmlText += `</ul>
//         </div>
//         </div>
//         </div>\n`
//     });

//     htmlText += `</div></body></html>` 

//     fs.writeFileSync('./dist/sample.html', htmlText);

//     console.log("Your team is now on display, navigate to the folder 'dist' and then click 'index.html'.  ")

// }
module.exports = {
    createHTML,
};
