# Professional README Generator Starter Code

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

## Installation

To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.

Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:

  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
  * [`axios`](https://www.npmjs.com/package/axios) will fetch your info from the GitHub API.

The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'ExampleREADME.md' and will be ready for you at the root of the repo.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your profile picture & email from GitHub.


## Usage
When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your pr<img width="1133" alt="Screen Shot 2023-01-24 at 22 59 08 pm" src="https://user-images.githubusercontent.com/113915529/214286137-9e4e89f4-e326-46d6-a720-9531f72940c5.png">
oject.

## Demo

![Untitled_ Jan 24, 2023 11_33 PM](https://user-images.githubusercontent.com/113915529/214293198-98579f28-a740-4c76-9b8b-24efcd699cfa.gif)




