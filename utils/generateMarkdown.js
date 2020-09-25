// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  ${data.badge}

  ## **Table of Contents**
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
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

  ## **Contributing**
  ${data.contributing}

  ## **Tests**
  ${data.test}

  ## **Questions**
  Please contact me with questions:
  Github: [https://github.com/${data.username}](https://github.com/${data.username})
  Email: ${data.question}


  
`;
}

module.exports = generateMarkdown;
