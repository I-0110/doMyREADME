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

.then((response) => {
    fs.writeFile(`./${response.title.toLowerCase()}_README.md`, generateREADME(response), (err) => {
        if(err) {
            console.error(err)
        } else {
            console.log("Sucess!")
        }
    })
});


function generateREADME(response){
    return ``
}
