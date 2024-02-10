import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import render from "./src/page-template.js";
import path from "path";
import fs from "fs";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ])
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
      teamMembers.push(manager);
      promptUser();
    });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add another employee?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building the team",
        ],
      },
    ])
    .then((userChoice) => {
      if (userChoice.choice === "Add an Engineer") {
        promptEngineer();
      } else if (userChoice.choice === "Add an Intern") {
        promptIntern();
      } else {
        generateHTML();
      }
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineers's github:",
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      teamMembers.push(engineer);
      promptUser();
    });
}

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      teamMembers.push(intern);
      promptUser();
    });
}

function generateHTML() {
  const html = render(teamMembers);
  fs.writeFile(outputPath, html, (err) => {
    if (err) {
      console.error("Error generating HTML", err);
    } else {
      console.log("Team HTML generated successfully!");
    }
  });
}

promptManager();
