const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: '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'
})

function renderLicenseBadge(license) {
  if (license === 'mit') {
    const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return mit
  } else if (license === 'mpl-2.0'){
    const mozilla = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    return mozilla
  } else if (license === 'apache-2.0'){
    const apache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return apache
  } else {
    return '';
  }
}

async function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }

  const response = await octokit.request(`GET /licenses/${license}`, {
    license: `${license}`,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  return response.data.html_url
}

async function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  
  const response = await octokit.request(`GET /licenses/${license}`, {
    license: `${license}`,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  return response.data.body
}

async function generateMarkdown(data) {
  const link = await renderLicenseLink(data.license)
  const license_section =await renderLicenseSection(data.license)
  const badge = renderLicenseBadge(data.license)
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
[license](${link})

${license_section}
`;
}

module.exports = generateMarkdown;
