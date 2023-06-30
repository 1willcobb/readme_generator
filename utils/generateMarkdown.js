// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
  ${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)



## Installation
  ${data.installation}

## Usage
  ${data.usage}



## Contributions
  ${data.contribution}

## Testing
  ${data.test}

## Questions
  Please reach out to me if you have any questions about the functionality of the app or installation
  [GitHub](https://github.com/${data.github})
  [Email](mailto:${data.email})

## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
