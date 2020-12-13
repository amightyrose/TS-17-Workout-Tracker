# Workout-Tracker

A node/mongodb application for keeping track of your exercise sessions and viewing cumulative statistics.

[>>> Try Workout Tracker here <<<](https://intense-brushlands-70089.herokuapp.com/)


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Questions](#questions)
* [License](#license)


## Installation

Requirements:

1. Mongodb.
2. Nodejs.

To install Workout Tracker:

1. Download the source code and copy to a new directory.
2. Open a terminal window and navigate to the new directory.
3. Run 'npm install'.
4. Create a new mongodb database called "workout".
5. Create a .env file in the root directory of the application. Add the following entry:
`MONGODB_URI=connectionstring`, replacing _connectionstring_ with the connection string for your database.
6. If you would like to include some seed data, run `npm run seed`.


## Usage

### Instructions
1. Open a terminal window and navigate to the application directory.
2. Run `npm start` and press Enter to continue.
3. Open a web browser and navigate to https://localhost:3000.
4. Start entering your workout information.


## Screenshots

### Landing Page

![ft-start](https://user-images.githubusercontent.com/69242373/102001152-5ba6fd00-3d3a-11eb-8a36-2db942049713.png)

### Add Exercise Page

![ft-add](https://user-images.githubusercontent.com/69242373/102001147-59dd3980-3d3a-11eb-8ca3-5cd16d42f7f6.png)

### Stats Page

![ft-stats](https://user-images.githubusercontent.com/69242373/102001153-5ba6fd00-3d3a-11eb-8427-e3d49b9ba1e3.png)


## Questions
Questions? Comments? Suggestions? Please get in touch.

GitHub: https://github.com/timsilby


## License
This project is licensed under the MIT License.
