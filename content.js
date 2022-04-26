const fs = require('fs');

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// setPage is called below
// String interpolation builds content for html file, and writeFile creates it
function setPage(producedCards) {

    let content = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Layout</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>

<body >
    <nav id="header" class="navbar">
        <div class="container-fluid justify-content-center">
            <div class="navbar-brand p-2">
                <h2>Team Profile</h2>
            </div>
        </div>
    </nav>
<main class="row justify-content-center mt-5">

${producedCards}
    
</main>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
</body>

</html>
`;

    fs.writeFile('./dist/page.html', content, (error) => console.error(error))
}

let cardsArray = [];

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

function createManagerCard(manager) {
    return `
    <div id="card" class="card px-0 py-0 m-2 col-7 col-md-4 col-lg-3 shadow p-3 mb-5 rounded">
    <div class="card-header">
        <h4 class="px-1 pt-1">${manager.name}</h4>
        <h5 class="px-1">Manager</h5>
    </div>
    <ul class="list-group list-group-flush p-1">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>
    `
};

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

function createEngineerCard(engineer) {
    return `
    <div id="card" class="card px-0 py-0 m-2 col-7 col-md-4 col-lg-3 shadow p-3 mb-5 rounded">
    <div class="card-header">
        <h4 class="px-1 pt-1">${engineer.name}</h4>
        <h5 class="px-1">Engineer</h5>
    </div>
    <ul class="list-group list-group-flush p-1">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="blank">${engineer.github}</a></li>
    </ul>
</div>
    `
};

function createInternCard(intern) {
    return `
    <div id="card" class="card px-0 py-0 m-2 col-7 col-md-4 col-lg-3 shadow p-3 mb-5 rounded">
    <div class="card-header">
        <h4 class="px-1 pt-1">${intern.name}</h4>
        <h5 class="px-1">Intern</h5>
    </div>
    <ul class="list-group list-group-flush p-1">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
    `
};

// buildCards(teamArray) called in index.js
// A for loop runs through teamArray, and calls its getRole function
// Based on getRole return, corresponding createCard function called
// Return from that function is added onto cardsArray
// Finally, that array joins objects and calls setPage

function buildCards(teamArray) {

    for (let i = 0; i < teamArray.length; i++) {
        let employee = teamArray[i];
        let role = employee.getRole();

        if (role === "Manager") {
            let managerCard = createManagerCard(employee);
            cardsArray.push(managerCard)
        } else if (role === "Engineer") {
            let engineerCard = createEngineerCard(employee);
            cardsArray.push(engineerCard);
        } else if (role === "Intern") {
            let internCard = createInternCard(employee);
            cardsArray.push(internCard)
        }
    }
    let producedCards = cardsArray.join('')
    return setPage(producedCards);
}
// Exporting so buildCards can be called in another file
module.exports = buildCards;