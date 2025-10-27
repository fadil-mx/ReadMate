// export const EN_Markdown = [
//   {
//     slug: 'title-and-description',
//     name: 'Title and Description',
//     markdown: `
// # Project Title

// A brief description of what this project does and who it's for

// `,
//   },
//   {
//     slug: 'installation',
//     name: 'Installation',
//     markdown: `
// ## Installation

// Install my-project with npm

// \`\`\`bash
//   npm install my-project
//   cd my-project
// \`\`\`
//     `,
//   },
//   {
//     slug: 'logo',
//     name: 'Logo',
//     markdown: `
// ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

// `,
//   },
//   {
//     slug: 'run-locally',
//     name: 'Run Locally',
//     markdown: `
// ## Run Locally

// Clone the project

// \`\`\`bash
//   git clone https://link-to-project
// \`\`\`

// Go to the project directory

// \`\`\`bash
//   cd my-project
// \`\`\`

// Install dependencies

// \`\`\`bash
//   npm install
// \`\`\`

// Start the server

// \`\`\`bash
//   npm run start
// \`\`\`

// `,
//   },
//   {
//     slug: 'screenshots',
//     name: 'Screenshots',
//     markdown: `
// ## Screenshots

// ![App Screenshot](https://dummyimage.com/468x300?text=App+Screenshot+Here)

// `,
//   },
//   {
//     slug: 'env-variables',
//     name: 'Environment Variables',
//     markdown: `
// ## Environment Variables

// To run this project, you will need to add the following environment variables to your .env file

// \`API_KEY\`

// \`ANOTHER_API_KEY\`

// `,
//   },
//   {
//     slug: 'features',
//     name: 'Features',
//     markdown: `
// ## Features

// - Light/dark mode toggle
// - Live previews
// - Fullscreen mode
// - Cross platform

// `,
//   },
//   {
//     slug: 'usage-examples',
//     name: 'Usage/Examples',
//     markdown: `
// ## Usage/Examples

// \`\`\`javascript
// import Component from 'my-project'

// function App() {
//   return <Component />
// }
// \`\`\`

// `,
//   },
//   {
//     slug: 'api',
//     name: 'API Reference',
//     markdown: `
// ## API Reference

// #### Get all items

// \`\`\`http
//   GET /api/items
// \`\`\`

// | Parameter | Type     | Description                |
// | :-------- | :------- | :------------------------- |
// | \`api_key\` | \`string\` | **Required**. Your API key |

// #### Get item

// \`\`\`http
//   GET /api/items/$\{id}
// \`\`\`

// | Parameter | Type     | Description                       |
// | :-------- | :------- | :-------------------------------- |
// | \`id\`      | \`string\` | **Required**. Id of item to fetch |

// #### add(num1, num2)

// Takes two numbers and returns the sum.

// `,
//   },
//   {
//     slug: 'contributing',
//     name: 'Contributing',
//     markdown: `
// ## Contributing

// Contributions are always welcome!

// See \`contributing.md\` for ways to get started.

// Please adhere to this project's \`code of conduct\`.

// `,
//   },
//   {
//     slug: 'tests',
//     name: 'Running Tests',
//     markdown: `
// ## Running Tests

// To run tests, run the following command

// \`\`\`bash
//   npm run test
// \`\`\`

// `,
//   },
//   {
//     slug: 'license',
//     name: 'License',
//     markdown: `
// ## License

// [MIT](https://choosealicense.com/licenses/mit/)

// `,
//   },
//   {
//     slug: 'badges',
//     name: 'Badges',
//     markdown: `
// ## Badges

// Add badges from somewhere like: [shields.io](https://shields.io/)

// [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
// [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
// [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

// `,
//   },
//   {
//     slug: 'roadmap',
//     name: 'Roadmap',
//     markdown: `
// ## Roadmap

// - Additional browser support

// - Add more integrations

// `,
//   },
//   {
//     slug: 'authors',
//     name: 'Authors',
//     markdown: `
// ## Authors

// - [@octokatherine](https://www.github.com/octokatherine)

// `,
//   },
//   {
//     slug: 'acknowledgement',
//     name: 'Acknowledgements',
//     markdown: `
// ## Acknowledgements

//  - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
//  - [Awesome README](https://github.com/matiassingers/awesome-readme)
//  - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

// `,
//   },
//   {
//     slug: 'support',
//     name: 'Support',
//     markdown: `
// ## Support

// For support, email fake@fake.com or join our Slack channel.

// `,
//   },
//   {
//     slug: 'feedback',
//     name: 'Feedback',
//     markdown: `
// ## Feedback

// If you have any feedback, please reach out to us at fake@fake.com

// `,
//   },
//   {
//     slug: 'related',
//     name: 'Related',
//     markdown: `
// ## Related

// Here are some related projects

// [Awesome README](https://github.com/matiassingers/awesome-readme)

// `,
//   },
//   {
//     slug: 'demo',
//     name: 'Demo',
//     markdown: `
// ## Demo

// Insert gif or link to demo

// `,
//   },
//   {
//     slug: 'tech',
//     name: 'Tech',
//     markdown: `
// ## Tech Stack

// **Client:** React, Redux, TailwindCSS

// **Server:** Node, Express

// `,
//   },
//   {
//     slug: 'optimizations',
//     name: 'Optimizations',
//     markdown: `
// ## Optimizations

// What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

// `,
//   },
//   {
//     slug: 'lessons',
//     name: 'Lessons',
//     markdown: `
// ## Lessons Learned

// What did you learn while building this project? What challenges did you face and how did you overcome them?

// `,
//   },
//   {
//     slug: 'faq',
//     name: 'FAQ',
//     markdown: `
// ## FAQ

// #### Question 1

// Answer 1

// #### Question 2

// Answer 2

// `,
//   },
//   {
//     slug: 'used-by',
//     name: 'Used By',
//     markdown: `
// ## Used By

// This project is used by the following companies:

// - Company 1
// - Company 2

// `,
//   },
//   {
//     slug: 'documentation',
//     name: 'Documentation',
//     markdown: `
// ## Documentation

// [Documentation](https://linktodocumentation)

// `,
//   },
//   {
//     slug: 'deployment',
//     name: 'Deployment',
//     markdown: `
// ## Deployment

// To deploy this project run

// \`\`\`bash
//   npm run deploy
// \`\`\`

// `,
//   },
//   {
//     slug: 'appendix',
//     name: 'Appendix',
//     markdown: `
// ## Appendix

// Any additional information goes here

// `,
//   },
//   {
//     slug: 'github-profile-intro',
//     name: 'Github Profile - Introduction',
//     markdown: `
// # Hi, I'm Katherine! 👋

// `,
//   },
//   {
//     slug: 'github-profile-about-me',
//     name: 'Github Profile - About Me',
//     markdown: `
// ## 🚀 About Me
// I'm a full stack developer...

// `,
//   },
//   {
//     slug: 'github-profile-skills',
//     name: 'Github Profile - Skills',
//     markdown: `
// ## 🛠 Skills
// Javascript, HTML, CSS...

// `,
//   },
//   {
//     slug: 'github-profile-links',
//     name: 'Github Profile - Links',
//     markdown: `
// ## 🔗 Links
// [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
// [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
// [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

// `,
//   },
//   {
//     slug: 'github-profile-other',
//     name: 'Github Profile - Other',
//     markdown: `
// ## Other Common Github Profile Sections
// 👩‍💻 I'm currently working on...

// 🧠 I'm currently learning...

// 👯‍♀️ I'm looking to collaborate on...

// 🤔 I'm looking for help with...

// 💬 Ask me about...

// 📫 How to reach me...

// 😄 Pronouns...

// ⚡️ Fun fact...

// `,
//   },
//   {
//     slug: 'colorreference',
//     name: 'Color Reference',
//     markdown: `## Color Reference

// | Color             | Hex                                                                |
// | ----------------- | ------------------------------------------------------------------ |
// | Example Color | ![#0a192f](https://dummyimage.com/10/0a192f/white?text=+) #0a192f |
// | Example Color | ![#f8f8f8](https://dummyimage.com/10/f8f8f8/white?text=+) #f8f8f8 |
// | Example Color | ![#00b48a](https://dummyimage.com/10/00b48a/white?text=+) #00b48a |
// | Example Color | ![#00d1a0](https://dummyimage.com/10/00d1a0/white?text=+)) #00d1a0 |

// `,
//   },
// ]

// from cloud
// export const EN_Markdown = [
//   {
//     id: 'title',
//     name: 'Title & Description',
//     icon: '📝',
//     markdown: `# Project Title

// A brief description of what this project does and who it's for.

// `,
//   },
//   {
//     id: 'badges',
//     name: 'Badges',
//     icon: '🏆',
//     markdown: `![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
// ![NPM Version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)
// ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

// `,
//   },
//   {
//     slug: 'logo',
//     name: 'Logo',
//     markdown: `
// ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

// `,
//   },
//   {
//     id: 'demo',
//     name: 'Demo',
//     icon: '🎬',
//     markdown: `## Demo

// **Live Demo:** [https://example.com](https://example.com)

// `,
//   },
//   {
//     id: 'screenshots',
//     name: 'Screenshots',
//     icon: '📸',
//     markdown: `## Screenshots

// ![App Screenshot](https://via.placeholder.com/800x400)

// ![Screenshot 2](https://via.placeholder.com/800x400)

// `,
//   },
//   {
//     id: 'features',
//     name: 'Features',
//     icon: '✨',
//     markdown: `## Features

// - 🌟 Feature 1: Description
// - 🚀 Feature 2: Description
// - 💡 Feature 3: Description
// - ⚡ Feature 4: Description
// - 🎯 Feature 5: Description

// `,
//   },
//   {
//     id: 'tech-stack',
//     name: 'Tech Stack',
//     icon: '💻',
//     markdown: `## Tech Stack

// **Client:** React, Redux, TailwindCSS

// **Server:** Node, Express

// **Database:** PostgreSQL, Redis

// `,
//   },
//   {
//     id: 'installation',
//     name: 'Installation',
//     icon: '⚙️',
//     markdown: `## Installation

// Install my-project with npm:

// \`\`\`bash
// npm install my-project
// cd my-project
// \`\`\`

// Or with yarn:

// \`\`\`bash
// yarn add my-project
// cd my-project
// \`\`\`

// `,
//   },
//   {
//     id: 'run-locally',
//     name: 'Run Locally',
//     icon: '🏠',
//     markdown: `## Run Locally

// Clone the project:

// \`\`\`bash
// git clone https://github.com/username/project.git
// \`\`\`

// Go to the project directory:

// \`\`\`bash
// cd project
// \`\`\`

// Install dependencies:

// \`\`\`bash
// npm install
// \`\`\`

// Start the server:

// \`\`\`bash
// npm run start
// \`\`\`

// `,
//   },
//   {
//     id: 'environment',
//     name: 'Environment Variables',
//     icon: '🔐',
//     markdown: `## Environment Variables

// To run this project, you will need to add the following environment variables to your .env file:

// \`API_KEY\`

// \`DATABASE_URL\`

// \`JWT_SECRET\`

// `,
//   },
//   {
//     id: 'usage',
//     name: 'Usage/Examples',
//     icon: '🚀',
//     markdown: `## Usage/Examples

// \`\`\`javascript
// import Component from 'my-project'

// function App() {
//   return <Component />
// }
// \`\`\`

// `,
//   },
//   {
//     id: 'api',
//     name: 'API Reference',
//     icon: '📚',
//     markdown: `## API Reference

// #### Get all items

// \`\`\`http
// GET /api/items
// \`\`\`

// | Parameter | Type     | Description                |
// | :-------- | :------- | :------------------------- |
// | \`api_key\` | \`string\` | **Required**. Your API key |

// #### Get item

// \`\`\`http
// GET /api/items/\${id}
// \`\`\`

// | Parameter | Type     | Description                       |
// | :-------- | :------- | :-------------------------------- |
// | \`id\`      | \`string\` | **Required**. Id of item to fetch |

// `,
//   },
//   {
//     id: 'deployment',
//     name: 'Deployment',
//     icon: '🌐',
//     markdown: `## Deployment

// To deploy this project run:

// \`\`\`bash
// npm run deploy
// \`\`\`

// `,
//   },
//   {
//     id: 'documentation',
//     name: 'Documentation',
//     icon: '📖',
//     markdown: `## Documentation

// [Documentation](https://linktodocumentation)

// `,
//   },
//   {
//     id: 'roadmap',
//     name: 'Roadmap',
//     icon: '🗺️',
//     markdown: `## Roadmap

// - [x] Task 1 completed
// - [x] Task 2 completed
// - [ ] Task 3 in progress
// - [ ] Task 4 planned
// - [ ] Task 5 planned

// `,
//   },
//   {
//     id: 'contributing',
//     name: 'Contributing',
//     icon: '🤝',
//     markdown: `## Contributing

// Contributions are always welcome!

// See \`contributing.md\` for ways to get started.

// Please adhere to this project's \`code of conduct\`.

// `,
//   },
//   {
//     id: 'tests',
//     name: 'Running Tests',
//     icon: '🧪',
//     markdown: `## Running Tests

// To run tests, run the following command:

// \`\`\`bash
// npm run test
// \`\`\`

// `,
//   },
//   {
//     id: 'faq',
//     name: 'FAQ',
//     icon: '❓',
//     markdown: `## FAQ

// #### Question 1

// Answer 1

// #### Question 2

// Answer 2

// `,
//   },
//   {
//     id: 'optimizations',
//     name: 'Optimizations',
//     icon: '⚡',
//     markdown: `## Optimizations

// What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

// `,
//   },
//   {
//     id: 'lessons',
//     name: 'Lessons Learned',
//     icon: '📚',
//     markdown: `## Lessons Learned

// What did you learn while building this project? What challenges did you face and how did you overcome them?

// `,
//   },
//   {
//     id: 'related',
//     name: 'Related Projects',
//     icon: '🔗',
//     markdown: `## Related

// Here are some related projects:

// [Awesome Project](https://github.com/username/awesome-project)

// `,
//   },
//   {
//     id: 'used-by',
//     name: 'Used By',
//     icon: '👥',
//     markdown: `## Used By

// This project is used by the following companies:

// - Company 1
// - Company 2

// `,
//   },
//   {
//     id: 'support',
//     name: 'Support',
//     icon: '💬',
//     markdown: `## Support

// For support, email support@example.com or join our Slack channel.

// `,
//   },
//   {
//     id: 'feedback',
//     name: 'Feedback',
//     icon: '💭',
//     markdown: `## Feedback

// If you have any feedback, please reach out to us at feedback@example.com

// `,
//   },
//   {
//     id: 'acknowledgements',
//     name: 'Acknowledgements',
//     icon: '🙏',
//     markdown: `## Acknowledgements

// - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
// - [Awesome README](https://github.com/matiassingers/awesome-readme)
// - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

// `,
//   },
//   {
//     id: 'authors',
//     name: 'Authors',
//     icon: '✍️',
//     markdown: `## Authors

// - [@username](https://www.github.com/username)

// `,
//   },
//   {
//     id: 'license',
//     name: 'License',
//     icon: '⚖️',
//     markdown: `## License

// [MIT](https://choosealicense.com/licenses/mit/)

// `,
//   },
//   {
//     id: 'appendix',
//     name: 'Appendix',
//     icon: '📎',
//     markdown: `## Appendix

// Any additional information goes here

// `,
//   },
// ]
export const EN_Markdown = [
  {
    id: 'title',
    name: 'Title & Description',
    icon: '📝',
    markdown: `# Project Title

A brief description of what this project does and who it's for.
`,
  },
  {
    id: 'badges',
    name: 'Badges',
    icon: '🏆',
    markdown: `![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![NPM Version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Last Commit](https://img.shields.io/github/last-commit/username/project)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
`,
  },
  {
    id: 'logo',
    name: 'Logo',
    icon: '🏷️',
    markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
`,
  },
  {
    id: 'table-of-contents',
    name: 'Table of Contents',
    icon: '📑',
    markdown: `## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usageexamples)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
`,
  },
  {
    id: 'project-status',
    name: 'Project Status',
    icon: '🚧',
    markdown: `## Project Status
🚧 This project is currently under active development.  
Expect frequent updates and improvements.
`,
  },
  {
    id: 'demo',
    name: 'Demo',
    icon: '🎬',
    markdown: `## Demo

**Live Demo:** [https://example.com](https://example.com)
`,
  },
  {
    id: 'screenshots',
    name: 'Screenshots',
    icon: '📸',
    markdown: `## Screenshots

![App Screenshot](https://via.placeholder.com/800x400)
![Screenshot 2](https://via.placeholder.com/800x400)
`,
  },
  {
    id: 'features',
    name: 'Features',
    icon: '✨',
    markdown: `## Features

- 🌟 Feature 1: Description
- 🚀 Feature 2: Description
- 💡 Feature 3: Description
- ⚡ Feature 4: Description
- 🎯 Feature 5: Description
`,
  },
  {
    id: 'tech-stack',
    name: 'Tech Stack',
    icon: '💻',
    markdown: `## Tech Stack

**Client:** React, Redux, TailwindCSS  
**Server:** Node, Express  
**Database:** PostgreSQL, Redis
`,
  },
  {
    id: 'folder-structure',
    name: 'Folder Structure',
    icon: '🗂️',
    markdown: `## Folder Structure

\`\`\`
├── src
│   ├── components
│   ├── pages
│   └── utils
├── public
└── package.json
\`\`\`
`,
  },
  {
    id: 'installation',
    name: 'Installation',
    icon: '⚙️',
    markdown: `## Installation

Install my-project with npm:

\`\`\`bash
npm install my-project
cd my-project
\`\`\`

Or with yarn:

\`\`\`bash
yarn add my-project
cd my-project
\`\`\`
`,
  },
  {
    id: 'run-locally',
    name: 'Run Locally',
    icon: '🏠',
    markdown: `## Run Locally

Clone the project:

\`\`\`bash
git clone https://github.com/username/project.git
\`\`\`

Go to the project directory:

\`\`\`bash
cd project
\`\`\`

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Start the server:

\`\`\`bash
npm run start
\`\`\`
`,
  },
  {
    id: 'environment',
    name: 'Environment Variables',
    icon: '🔐',
    markdown: `## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

\`API_KEY\`  
\`DATABASE_URL\`  
\`JWT_SECRET\`
`,
  },
  {
    id: 'usage',
    name: 'Usage/Examples',
    icon: '🚀',
    markdown: `## Usage/Examples

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`
`,
  },
  {
    id: 'api',
    name: 'API Reference',
    icon: '📚',
    markdown: `## API Reference

#### Get all items
\`\`\`http
GET /api/items
\`\`\`

| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item
\`\`\`http
GET /api/items/\${id}
\`\`\`

| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| \`id\` | \`string\` | **Required**. Id of item to fetch |
`,
  },
  {
    id: 'deployment',
    name: 'Deployment',
    icon: '🌐',
    markdown: `## Deployment

To deploy this project run:

\`\`\`bash
npm run deploy
\`\`\`
`,
  },
  {
    id: 'documentation',
    name: 'Documentation',
    icon: '📖',
    markdown: `## Documentation

[Documentation](https://linktodocumentation)
`,
  },
  {
    id: 'roadmap',
    name: 'Roadmap',
    icon: '🗺️',
    markdown: `## Roadmap

- [x] Task 1 completed  
- [x] Task 2 completed  
- [ ] Task 3 in progress  
- [ ] Task 4 planned  
- [ ] Task 5 planned
`,
  },
  {
    id: 'contributing',
    name: 'Contributing',
    icon: '🤝',
    markdown: `## Contributing

Contributions are always welcome!

See [Contributing](CONTRIBUTING.md) for ways to get started.  
Please adhere to this project's [Code of Conduct](CODE_OF_CONDUCT.md).
`,
  },
  {
    id: 'contributors',
    name: 'Contributors',
    icon: '👨‍💻',
    markdown: `## Contributors

Thanks to the following amazing people:

<a href="https://github.com/username/project/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=username/project" />
</a>
`,
  },
  {
    id: 'tests',
    name: 'Running Tests',
    icon: '🧪',
    markdown: `## Running Tests

To run tests, run the following command:

\`\`\`bash
npm run test
\`\`\`
`,
  },
  {
    id: 'changelog',
    name: 'Changelog',
    icon: '🕓',
    markdown: `## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history.
`,
  },
  {
    id: 'security',
    name: 'Security',
    icon: '🛡️',
    markdown: `## Security

If you discover any security vulnerabilities, please create an issue or contact us directly at security@example.com.
`,
  },
  {
    id: 'faq',
    name: 'FAQ',
    icon: '❓',
    markdown: `## FAQ

#### Question 1
Answer 1

#### Question 2
Answer 2
`,
  },
  {
    id: 'optimizations',
    name: 'Optimizations',
    icon: '⚡',
    markdown: `## Optimizations

Describe code or performance optimizations you made (e.g., refactors, caching, accessibility improvements).
`,
  },
  {
    id: 'lessons',
    name: 'Lessons Learned',
    icon: '📚',
    markdown: `## Lessons Learned

What did you learn while building this project?  
What challenges did you face and how did you overcome them?
`,
  },
  {
    id: 'related',
    name: 'Related Projects',
    icon: '🔗',
    markdown: `## Related

Here are some related projects:

[Awesome Project](https://github.com/username/awesome-project)
`,
  },
  {
    id: 'used-by',
    name: 'Used By',
    icon: '👥',
    markdown: `## Used By

This project is used by the following companies:

- Company 1  
- Company 2
`,
  },
  {
    id: 'support',
    name: 'Support',
    icon: '💬',
    markdown: `## Support

For support, email support@example.com or join our Slack channel.
`,
  },
  {
    id: 'feedback',
    name: 'Feedback',
    icon: '💭',
    markdown: `## Feedback

If you have any feedback, please reach out to us at feedback@example.com
`,
  },
  {
    id: 'acknowledgements',
    name: 'Acknowledgements',
    icon: '🙏',
    markdown: `## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
`,
  },
  {
    id: 'authors',
    name: 'Authors',
    icon: '✍️',
    markdown: `## Authors

- [@username](https://www.github.com/username)
`,
  },
  {
    id: 'license',
    name: 'License',
    icon: '⚖️',
    markdown: `## License

[MIT](https://choosealicense.com/licenses/mit/)
`,
  },
  {
    id: 'appendix',
    name: 'Appendix',
    icon: '📎',
    markdown: `## Appendix

Any additional information goes here.
`,
  },
]
