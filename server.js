// Created inquirer variable for express route
const express = require('express');

// Created app variable to set initial port

const app = express();

// Setting initial port
const PORT = process.env.PORT || 3000;

// Setting up express app for routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Creating routes for HTML and API for note taking app
require('./routes/apiroute')(app);
require('./routes/htmlroute')(app);

//Created a listener function to start the app

app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});