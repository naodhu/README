// TODO: Create a function that returns a license badge based on which license is passed in
function licenseBadge(license) {
  if (license === 'MIT') {
    return '<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>';
  } else if (license === 'APACHE 2.0') {
    return '<a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>';
  } else if (license === 'GPL 3.0') {
    return '<a href="https://opensource.org/licenses/GPL-3.0"><img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg"></a>';
  } else if (license === 'BSD 3') {
    return '<a href="https://opensource.org/licenses/BSD-3-Clause"><img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"></a>';
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
function getLicenseLink(license) {
  if (license) {
    return '<a href="' + license.url + '">' + license.name + '</a>';
  } else {
    return '';
  }
}
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function getLicenseSection(license) {
  if (license === "MIT") {
    return `
## License
This project is licensed under the MIT license.
`;
  } else if (license === "APACHE 2.0") {
    return `
## License
This project is licensed under the Apache 2.0 license.
`;
  } else if (license === "GPL 3.0") {
    return `
## License
This project is licensed under the GPL 3.0 license.
`;
  } else if (license === "BSD 3") {
    return `
## License
This project is licensed under the BSD 3 license.
`;
  } else {
    return "";
  }
}
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
