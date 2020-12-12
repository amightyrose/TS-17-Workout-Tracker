// Require npm packages
require('dotenv').config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Configure express app
const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require mongoose models
const db = require("./models");

// Require routes
const htmlRoutes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/api-routes.js');
app.use(htmlRoutes);
app.use(apiRoutes);


// Create db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout?retryWrites=true&w=majority", {
// mongoose.connect("mongodb+srv://root:WbphzWf8hQ4a4an1@cluster0.9uw5z.mongodb.net/workout?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})
.then(conn => console.log(`Connected to ${conn.connections[0].host}.`))
.catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}.`);
});
