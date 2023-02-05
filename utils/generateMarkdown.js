// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![Github license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    return `\n* [Licence](#licence)\n`;
  }return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `## Licence
    
     licence under ${license} license.`;
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents !
 * [Descriptions](#description)
 * [Dependencies](#Dependencies)
 * [How to use the application](#HowToUseThisApplication)
 * [Testing](#testting)
 * [Contributores](#Contributores)
 * [Questions](#qestions)
 * [Contact_me](#contact_me)

${renderLicenseLink(data.license)}

## Descriptions 
${data.description}

## Screenshot 
![alt-text](${data.screenshort})

## Deployed Repo URL 
${data.link}

## Features 
${data.features}

## Dependencies
${data.require}

## Technologies 
${data.usage}

## Testing
${data.test}

## Contributores
${data.contributors}


${renderLicenseSection(data.license)}
## Questions
Please send your queries [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).


`;
}

module.exports = generateMarkdown;
