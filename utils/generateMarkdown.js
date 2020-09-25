// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#question)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  ${answers.question}

  ## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
`;
}

module.exports = generateMarkdown;
