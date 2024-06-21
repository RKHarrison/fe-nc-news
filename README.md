# FE-NC-News
---
### Introduction
FE-NC-News is the front-end client for Northcoders News API (see the backend project on my [GitHub](https://github.com/RKHarrison/RKH-NC-News/)).

This React application interacts with the RESTful Northcoders News API to fetch, display, and manage news articles and comments dynamically. Developed with modern JavaScript tools and libraries, this client provides an engaging and accessible user interface for both public viewers and registered users. It makes use of paradigms such as optimistic rendering and responsive design to prodive a consistent and postive experience.

The deployed version can be seen [here](https://rkh-ncnews.netlify.app/). NOTE: Due to free hosting, a wait of around a minute will be necessary for the backend API to spin up and provide data.

### Project Support Features
* Public users can view news articles and comments.
* Registered users can post, edit, and delete their articles and comments.
* Responsive design ensures a seamless experience across all devices.

### Minimum Requirements
* **Node.js**: v14.0.0 or above (developed on v21.6.1).

### Installation Guide 
* Clone the repository from [GitHub](https://github.com/YourGitHubProfile/fe-nc-news).
* Run `npm install` to install all dependencies listed in `package.json`.
* Run `npm start` to launch the application locally.
* The app will be available at `localhost:5173` by default, accessible via web browser.

### NOTE TO DEVELOPERS: 
* There is currently one 'user' option to login in as to unlock all features.
* Ensure Node.js is installed and properly set up.
* Always add sensitive files to `.gitignore`

### Main Technologies Used
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Vite](https://vitejs.dev/) - Frontend build tool that significantly improves the development experience.
* [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js.
* [React Router](https://reactrouter.com/) - JavaScript framework to handle client and server-side routing in React apps.
* [Jest](https://jestjs.io/) - JavaScript Testing.
* [ESLint](https://eslint.org/) - JavaScript linter.
* [Babel](https://babeljs.io/) - JavaScript compiler used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.

### Scripts
* `npm test`: Runs the Jest test suite.
* `npm run dev`: Starts the development server using Vite.
* `npm run lint`: Lints the codebase for potential errors.
* `npm run build`: Creates a production build of the app for deployment.
* `npm run preview`: Serves a production build locally for testing, USE AFTER BUILD SCRIPT.

The project is part of a portfolio developed during a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/). All feedback welcome!