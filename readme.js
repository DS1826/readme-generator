const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your project title:",
            name: "Title"
        },
        {
            type: "input",
            message: "Enter your project description:",
            name: "Description"
        },
        {
            type: "input",
            message: "Enter your installation instructions:",
            name: "Installation"

        },
        {
            type: "input",
            message: "Enter your usage information:",
            name: "Usage"

        },
        {
            type: "input",
            message: "Enter your contribution guidelines:",
            name: "Contributing"

        },
        {
            type: "input",
            message: "Enter your test instructions:",
            name: "Tests"

        },
        {
            type: "list",
            message: "Choose a license for your applicaiton:",
            name: "License",
            choices: [
                "ISC",
                "MIT",
                "Apache-2.0"
            ]
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "GitHub"

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "Email"

        }

    ]);
}

function generateReadMe(answers) {
    // let badge = "";

    // if (answers.License === "ISC") {
    //    let badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    // } else if (answers.License === "MIT") {
    //     let badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    // } else {
    //     let badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    // }

    return `
      # ${answers.Title}

      ## Description
      ${answers.Description}
      
      ## Table of Contents
      1. [Title](#Title)
      2. [Description](#Description)
      3. [Installation](#Installation)
      4. [Usage](#Usage)
      5. [License](#License)
      6. [Contributing](#Contributing)
      7. [Tests](#Tests)
      8. [Questions?](#Questions?)
      
      ## Installation
      ${answers.Installation}
      
      ## Usage
      ${answers.Usage}
      
      ## License "[![License: ${answers.License}](https://img.shields.io/badge/License-${answers.License}-yellow.svg)](https://opensource.org/licenses/${answers.License})";
      This application is covered under the [${answers.License} License](https://opensource.org/licenses/${answers.License})
      
      ## Contributing
      ${answers.Contributing}

      ## Tests
      ${answers.Tests}
      
      ## Questions?
      Email me at ${answers.Email}
      Check out my [GiHub Profile](https://github.com/${answers.GitHub}) 
    `;
}

promptUser()
    .then(function (answers) {
        const readMe = generateReadMe(answers);

        return writeFileAsync("README.md", readMe);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err)
    });

