function renderLicenseBadge(license) {
  if (license === 'mit') {
    const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return mit
  } else if (license === 'mozilla'){
    const mozilla = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    return mozilla
  } else if (license === 'apache'){
    const apache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return apache
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  if (license === 'mit') {
    const mit = `https://choosealicense.com/licenses/mit/`
    return mit
  } else if (license === 'mozilla'){
    const mozilla = `https://choosealicense.com/licenses/mpl-2.0/`
    return mozilla
  } else if (license === 'apache'){
    const apache = `https://www.apache.org/licenses/LICENSE-2.0`
    return apache
  }
}

function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  if (license === 'mit') {
    const mit = `MIT License`
    return mit
  } else if (license === 'mozilla'){
    const mozilla = `Mozilla Public License 2.0`
    return mozilla
  } else if (license === 'apache'){
    const apache = `Apache License 2.0`
    return apache
  }

}
  

function generateMarkdown(data) {
  const link =  renderLicenseLink(data.license)
  const license_section = renderLicenseSection(data.license)
  const badge = renderLicenseBadge(data.license)

  let license_section_copy = `[${license_section}](${link})

  The license used for this application is ${license_section} which can be found at the [here](${link})`

  if (!license_section || !link) {
    license_section_copy = "There is no license for this project"
  }

  return `# ${data.title}
${badge}

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
${license_section_copy}
`;
}

module.exports = generateMarkdown