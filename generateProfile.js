// adding a badge to the top of the readme (line 49)
function generateProfile({ name, id, email }) {
    return `
<h2> ${name} <h2>

<p> Description <p>

<p>${id}<p>

<p>${email}<p>


`;

}
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the syntax on line 76-78:
// ```md
// ![alt text](assets / images / screenshot.png)
//     ```

// exporting the function
module.exports = generateProfile;