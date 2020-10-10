const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
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
          "Apache"
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

  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

  function generateReadMe(answers) {
      return `
      # ${answers.Title}

      ## Description
      ${answers.Description}
      
      ## Table of Contents
      1.[Title](#Title)
      2.[Description](#Description)
      3.[Installation](#Installation)
      4.[Usage](#Usage)
      5.[License](#License)
      6.[Contributing](#Contributing)
      7.[Test](#Test)
      8.[Questions?](#Questions?)
      
      ## Installation
      ${answers.Installation}
      
      ## Usage
      ${answers.Usage}
      
      ## License
      This application is covered under the ${answers.License} License
      
      ## Contributing
      ${answers.Contributing}

      ## Tests
      ${answers.Tests}
      
      ## Questions?
      Email me at ${answers.Email}
      Check out my [GiHub Profile](https://github.com/${answers.GitHub}) 
    `;
  }