import inquirer from "inquirer";
import fs from 'fs';
// import { features } from "process";

inquirer.prompt([
    {
        message: 'What is your unique project title?',
        name: 'title'
    },
    {
        message: 'What was your motivation?',
        name: 'motivation'
    },
    {
        message: 'Why did you build this project?', //Note: the answer is not "Because it was a homework assignment."
        name: 'why'
    },
    {
        message: 'What problem does it solve?',
        name: 'problem'
    },
    {
        message: 'What did you learn?',
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
        type: 'confirm',
        message: 'Is there a Step 3 required to install your project?',
        name: 'yn-step3'
    },
    {
        message: 'Step 3 required to install your project:',
        name: 'step3'
    },
    {
        message: 'How do I use your project? Provide instructions and examples here:',
        name: 'instructions'
    },
    {
        message: 'Please add a screenshot of your project here: ',
        name: 'screenshot'
    },
    {
        type: 'confirm',
        message: 'Do you have collaborators?',
        name: 'yn-collaborators'
    },
    {
        message: 'Name of your collaborators: (Please separate each of them with commas)',
        name: 'collaborators'
    },
    {
        type: 'confirm',
        message: 'Did you use any third-party assets that require attribution?',
        name: 'yn-thirdParty'
    },
    {
        message: 'List the creators with links to their primary web:',
        name: 'list-thirdParty'
    },
    {
        type: 'confirm',
        message: 'Did you followed tutorial(s)?',
        name: 'yn-tutorial'
    },
    {
        message: 'List include links here:',
        name: 'list-tutorial'
    },
    {
        type: 'confirm',
        message: 'Did you have a license? If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)',
        name: 'yn-license'
    },
    {
        message: 'What is your license?',
        name: 'license'
    },
    {
        message: "Almost done! What is/are your project's feature(s)?",
        name: 'features'
    },
    {
        type: 'confirm',
        message: "Is this an application or package?",
        name: 'yn-app'
    },
    {
        type: 'confirm',
        message: "Are you doing the app/pack with [Contributor Covenant](https://www.contributor-covenant.org/)?",
        name: 'yn-contributorCovenant'
    },
    {
        message: "How do developers contribute? What is the guideline?",
        name: 'app-guideline'
    },
    {
        message: "Last Question! Would you provide examples on how to run your project/app/package here?",
        name: 'test'
    },
])

