var inquirer = require('inquirer');

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