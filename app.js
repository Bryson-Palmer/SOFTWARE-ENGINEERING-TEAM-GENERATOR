const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

// Ask user for Manager info
function askUserForManagerInfo() {

    return inquirer.prompt([

        {
            message: "Ask a question",
            name: "replaceMe",
            type: "input"
        }

    ]).then( ( managerData ) => {

        // Create new instance of a Manager
        const newManager = new Manager ( managerData.name, managerData.id, managerData.email, managerData.officeNumber );

        teamMembers.push ( newManager );

        askUserForEmployeeType();

    });

}

// Ask user for next employee type
function askUserForEmployeeType() {

    return inquirer.prompt([

        // List type prompt
        {
            message: "Ask a question",
            name: "replaceMe",
            type: "input"
        }

    ]).then( ( newEmployeeChoiceData ) => {

        // Conditional
        // IF they selected a new Engineer
        askUserForEngineerInfo();

        // ELSE if the user selected a new Intern
        askUserForInternInfo();

        // ELSE create the output
        createHtmlFile();

        
    });

}

// Ask user for Engineer info
function askUserForEngineerInfo() {

    return inquirer.prompt([

        {
            message: "Ask a question",
            name: "replaceMe",
            type: "input"
        }

    ]).then( (EngineerData) => {

        // Create new instance of a Manager
        const newEngineer = new Engineer ( EngineerData.name, EngineerData.id, EngineerData.email, EngineerData.github );

        teamMembers.push ( newEngineer );

        askUserForEmployeeType();

    });

}

// Ask user for Intern info
function askUserForInternInfo() {

    return inquirer.prompt([

        {
            message: "Ask a question",
            name: "replaceMe",
            type: "input"
        }

    ]).then( (InternData) => {

        // Create new instance of a Manager
        const newIntern = new Intern ( InternData.name, InternData.id, InternData.email, InternData.school );

        teamMembers.push ( newIntern );

        askUserForEmployeeType();

    });

}

// Create HTML file
function createHtmlFile() {

    const htmlContent = render( teamMembers );

    // Use the FS module to create the output file


};

askUserForManagerInfo();

// Make it work then make it modular

// Add console.log("\n"); line breaks

// Add color headers. Dif color for each employee type

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
