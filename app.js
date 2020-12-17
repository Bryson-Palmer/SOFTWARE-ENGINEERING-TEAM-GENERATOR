const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const chalk = require("chalk");
const path = require("path");
const util = require("util");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

const teamMembers = [];


// Ask user for Manager info
function askUserForManagerInfo() {

    console.log( chalk.blueBright("\n\n------------------------------------------------\n") );
    console.log( chalk.greenBright("Welcome to the Software Engineer Team Generator.\n") );
    console.log( chalk.greenBright("-------- Lets start building your team! --------\n") );
    console.log( chalk.greenBright("             *          *          *               ") );
    console.log( chalk.greenBright("            * *        * *        * *              ") );
    console.log( chalk.greenBright("           ** **      ** **      ** **             ") );
    console.log( chalk.blueBright("\n---- To begin, add your manager information.----\n") );
    console.log( chalk.blueBright("------------------------------------------------\n\n") );


    return inquirer.prompt([

        {
            type: "input",
            name: "firstName",
            message: "Enter your first name: ",
            validate: function validateName( firstName ) {
                return firstName !== "";
            }
        },

        {
            type: "input",
            name: "lastName",
            message: "Enter your last name: ",
            validate: function validateName( lastName ) {
                return lastName !== "";
            }
        },

        {
            type: "number",
            name: "idNumber",
            message: "Enter your ID number: ",
            validate: function validateID( idNumber ) {
                return idNumber !== "";
            }
        },

        {
            type: "input",
            name: "email",
            message: "Enter your email: ",
            validate: function validateEmail( email ) {
                return email !== "";
            }
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number: ",
            validate: function validateID( officeNumber ) {
                return officeNumber !== "";
            }
        },

    ]).then( (managerData) => {

        // Create new instance of a Manager
        const newManager = new Manager ( managerData.firstName, managerData.lastName, managerData.idNumber, managerData.email, managerData.officeNumber );

        teamMembers.push( newManager );
        
        askUserForEmployeeType();

    });

}

// Ask user for next employee type
function askUserForEmployeeType() {

    console.log( chalk.blueBright("\n\n--- Do you want to add another team member? ----") );
    console.log( chalk.blueBright("\n------------------------------------------------\n\n") );

    return inquirer.prompt([

        // List type prompt
        {
            type: "list",
            name: "employeeType",
            message: "Please choose from the following options.\n",
            choices: ["Add an Engineer", "Add an Intern", "I'm all done adding team members"],
            
        }

    ]).then( ( newEmployeeChoiceData ) => {


        // Conditional
        if( newEmployeeChoiceData.employeeType == "Add an Engineer" ) {
            // IF they selected a new Engineer
            askUserForEngineerInfo();
        
        } else if( newEmployeeChoiceData.employeeType == "Add an Intern" ) {
            // ELSE if the user selected a new Intern
            askUserForInternInfo();

        } else
            // ELSE create the output
            createHtmlFile();
        
    });

}

// Ask user for Engineer info
function askUserForEngineerInfo() {

    console.log( chalk.blueBright("\n\n\n---------- Now, lets add an Engineer. ----------\n") );
    console.log( chalk.blueBright("------------------------------------------------\n\n") );


    return inquirer.prompt([

        {
            type: "input",
            name: "firstName",
            message: "Enter your first name: ",
            validate: function validateName( firstName ) {
                return firstName !== "";
            }
        },

        {
            type: "input",
            name: "lastName",
            message: "Enter your last name: ",
            validate: function validateName( lastName ) {
                return lastName !== "";
            }
        },

        {
            type: "number",
            name: "idNumber",
            message: "Enter thier ID number: ",
            validate: function validateID( idNumber ) {
                return idNumber !== "";
            }
        },

        {
            type: "input",
            name: "email",
            message: "Enter their email: ",
            validate: function validateEmail( email ) {
                return email !== "";
            }
        },

        {
            type: "input",
            name: "github",
            message: "Enter their Git Hub account: ",
            validate: function validateID( github ) {
                return github !== "";
            }
        },

    ]).then( (EngineerData) => {

        // Create new instance of a Manager
        const newEngineer = new Engineer ( EngineerData.firstName, EngineerData.lastName, EngineerData.idNumber, EngineerData.email, EngineerData.github );

        teamMembers.push ( newEngineer );

        askUserForEmployeeType();

    });

}

// Ask user for Intern info
function askUserForInternInfo() {

    console.log( chalk.blueBright("\n\n\n----------- Now, lets add an Intern. -----------\n") );
    console.log( chalk.blueBright("------------------------------------------------\n\n") );


    return inquirer.prompt([

        {
            type: "input",
            name: "firstName",
            message: "Enter your first name: ",
            validate: function validateName( firstName ) {
                return firstName !== "";
            }
        },

        {
            type: "input",
            name: "lastName",
            message: "Enter your last name: ",
            validate: function validateName( lastName ) {
                return lastName !== "";
            }
        },

        {
            type: "number",
            name: "idNumber",
            message: "Enter thier ID number: ",
            validate: function validateID( idNumber ) {
                return idNumber !== "";
            }
        },

        {
            type: "input",
            name: "email",
            message: "Enter their email: ",
            validate: function validateEmail( email ) {
                return email !== "";
            }
        },

        {
            type: "input",
            name: "school",
            message: "Enter their school: ",
            validate: function validateID( school ) {
                return school !== "";
            }
        },

    ]).then( (InternData) => {

        // Create new instance of a Manager
        const newIntern = new Intern ( InternData.firstName, InternData.lastName, InternData.idNumber, InternData.email, InternData.school );

        teamMembers.push ( newIntern );

        askUserForEmployeeType();

    });

}

// Create HTML file
function createHtmlFile() {

    console.log( chalk.blueBright("\n\n------------------------------------------------\n") );
    console.log( chalk.greenBright("------------------ That's it! ------------------\n") );
    console.log( chalk.greenBright("            *          *          *               ") );
    console.log( chalk.greenBright("           * *        * *        * *              ") );
    console.log( chalk.greenBright("          ** **      ** **      ** **             ") );
    console.log( chalk.greenBright("\n-------- You have successfuly used the ---------\n") );
    console.log( chalk.greenBright("------ Software Engineer Team Generator. -------\n") );
    console.log( chalk.greenBright(" (HTML is in the output folder in the explorer) \n") );
    console.log( chalk.blueBright("------------------------------------------------\n\n") );

    const htmlContent = render( teamMembers );

    // Use the FS module to create the output file
    writeFileAsync(outputPath, htmlContent, (err) => {
        if( err ) throw err;
    });
};

askUserForManagerInfo();
