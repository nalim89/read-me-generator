
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license})`
}


function renderLicenseLink(license) {
  return `[${license}](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
    
  [Installation](#installation)
    
  [Usage](#usage)
  
  [License](#license)
  
  [Contributing](#contributing)
  
  [Tests](#tests)
  
  [Questions](#questions)
    
  ## Installation 
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License

  ${data.license}
  
  ## Contributing 
  
  ${data.contribution}

  ## Tests 
  
  ${data.tests}
  
  ## Questions

  For any questions please feel free to reach out through the accounts listed below:

  ${data.github}

  ${data.email} 
  
`;
}

module.exports = generateMarkdown;
