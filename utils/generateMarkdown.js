// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

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
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## GitHub User
  ${answers.username}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  ${answers.question}

  ## Badges
  ${answers.badge}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
`;
}

module.exports = generateMarkdown;
