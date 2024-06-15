# Cocktail API Project

This project is a simple web application that allows users to search for cocktail recipes using the Cocktail API. The application is built using HTML, CSS (with Sass), and JavaScript.

## Features

- Search for cocktails by name.
- Display cocktail details including name, image, ingredients, and instructions.

## Technologies Used

- **HTML**: Structure of the web page.
- **Sass**: Styling the application with custom styles.
- **Bootstrap**: Responsive design and pre-built components.
- **JavaScript**: Handling API requests and DOM manipulation.

## Setup Instructions

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

### Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Umt-Hym/Cocktails-Recipe-API.git
   cd Cocktails-Recipe-API

2. **Install dependencies**

   Navigate to the project directory and install the necessary npm packages.

   ```bash
   npm install

3. **Install Sass**

   Install Sass globally or locally using npm:

   ```bash
   npm install -g sass

4. **Compile SCSS**

   Compile the SCSS files into CSS. You can do this using the following command:

   ```bash
   sass scss/main.scss css/style.css

Alternatively, you can set up a script in your `package.json` to make this easier. Add the following script to the `scripts` section:

```json
"scripts": {
  "compile:sass": "sass scss/main.scss css/style.css"
}
Then run the script using:

    npm run compile:sass

**Bootstrap Integration
   
1. Install Bootstrap using npm or yarn:

    npm install bootstrap
    or 
    yarn add bootstrap

2. Import the Bootstrap CSS file in your main entry point (usually src/index.js):

   (JS)
   import 'bootstrap/dist/css/bootstrap.min.css';



Open the application:

Open the index.html file in your web browser to see the application in action.

**Now, enjoy creating delicious cocktails and sharing them with friends and family!**
