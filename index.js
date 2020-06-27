const fs = require("fs");
const inquirer = require("inquirer");
const { rejects } = require("assert");
const { resolve } = require("path");

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!!"
            })
        })
    })
}

const generateTitle = readmeData => readmeData.title

// function to start program
const init = () => {
    // array of questions for user
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project title?"
        }
    ])
}

//function call to initialize program
init()
    .then(readmeData => generateTitle(readmeData))
    .then(pageMd => writeFile(pageMd))


