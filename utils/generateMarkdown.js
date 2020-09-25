// function to generate markdown for README
function generateMarkdown(data) {
  return `**# ${data.title}**

  ## **Table of Contents**
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [GitHub User](#github)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#question)

  ## **Description**
  ${data.description}

  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **License**
  ${data.license}

  ## **GitHub**
  Github: [https://github.com/${data.username}](https://github.com/${data.username})

  ## **Contributing**
  ${data.contributing}

  ## **Tests**
  ${data.test}

  ## **Questions**
  Please contact me with questions via email: ${data.question}

  ## **Badges**
  ${data.badge}


  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
`;
}

module.exports = generateMarkdown;
