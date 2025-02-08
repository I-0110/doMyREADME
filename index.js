import inquirer from "inquirer";
import fs from 'fs';
// import { features } from "process";

inquirer.prompt([
    {
        message: 'What is your name?',
        name: 'name'
    },
    {
        message: 'What is your github link?',
        name: 'ghLink'
    },
    {
        message: 'What is your email for questions?',
        name: 'email'
    },
    {
        message: 'What is your unique project title?',
        name: 'title'
    },
    {
        message: 'Please complete our sentences/questions. Our project is inspired by ...',
        name: 'motivation'
    },
    {
        message: 'We did this project because ...', //Note: the answer is not "Because it was a homework assignment."
        name: 'why'
    },
    {
        message: 'What problem does it solve? We resolved ...',
        name: 'problem'
    },
    {
        message: 'We learned that ...',
        name: 'learn'
    },
    {
        message: 'Step 1 required to install your project:',
        name: 'step1'
    },
    {
        message: 'Step 2 required to install your project:',
        name: 'step2'
    },
    {
        message: 'Step 3 required to install your project:',
        name: 'step3'
    },
    {
        message: 'How do I use your project? You can use our project by... (Provide instructions and examples here)',
        name: 'instructions'
    },
    {
        message: 'Please add a screenshot of your project here: (Use the relative filepath)',
        name: 'screenshot'
    },
    {
        message: "Please add your collaborator(s) name's AND GitHub link here:",
        name: 'collaborators'
    },
    {
        message: 'Please add any third-party assets that require attribution here:',
        name: 'thirdParty'
    },
    {
        message: 'Please include tutorial(s) link that you used for this project:',
        name: 'tutorial'
    },
    {
        message: 'What is your license? (https://choosealicense.com/)',
        name: 'license'
    },
    {
        message: 'Add your badge(s) link(s) here (separate them with commas): https://shields.io/',
        name: 'badges'
    },
    {
        message: "Almost done! What is/are your project's feature(s)?",
        name: 'features'
    },
    {
        type: 'confirm',
        message: "Is this an application or package?",
        name: 'ynApp'
    },
    {
        type: 'confirm',
        message: "Are you doing the app/pack with [Contributor Covenant](https://www.contributor-covenant.org/)?",
        name: 'ynContributorCovenant'
    },
    {
        message: "How do developers contribute? What is the guideline?",
        name: 'appGuideline'
    },
    {
        message: "Last Question! Would you provide examples on how to run your project/app/package here?",
        name: 'test'
    },
])

.then((response) => {
    fs.writeFile(`./README.md`, generateREADME(response), (err) => {
        if(err) {
            console.error(err)
        } else {
            console.log("Success!")
        }
    })
});


function generateREADME(response){
    return `# ${response.title.toUpperCase()}

## Description

Our ${response.title} is inspired by ${response.motivation}. We created this project because ${response.why}. We resolved ${response.problem}. We learned that ${response.learn}.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Steps for installation:
Step 1: ${response.step1}
Step 2: ${response.step2}
Step 3: ${response.step3}

## Usage

You can use our ${response.title} by ${response.instructions}.

    ![${response.title}](${response.screenshot})
    
## Credits

- Collaborator(s):
${response.collaborators}

- Third Party(ies):
${response.thirdParty}

- Tutorial(s) used: 
${response.tutorial}

## License

${response.license}

## Badges

![badmath](${response.badges})

## Features

${response.features}

## How to Contribute

${response.ynApp} application/package. 

${response.ynContributorCovenant} contributor covenant. 

${response.appGuideline}

## Tests

${response.test}

Created by Ivelis Becker GitHub: I-0110

## Questions 

For questions, please contact ${response.name}, ${response.email}, ${response.ghLink}`

}