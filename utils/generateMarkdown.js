// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [GitHub User]
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#question)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## GitHub User
  ${data.username}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  ${data.question}

  ## Badges
  ${data.badge}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
`;
}

module.exports = generateMarkdown;
