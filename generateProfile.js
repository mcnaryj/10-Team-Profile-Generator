const fs = require('fs');


let profileHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
    
    
    `
// adding a badge to the top of the readme (line 49)
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the syntax on line 76-78:
// ```md
// ![alt text](assets / images / screenshot.png)
//     ```

// exporting the function
module.exports = generateProfile;