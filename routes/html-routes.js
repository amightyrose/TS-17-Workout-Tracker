// Require path for accessing html files. Express to handle routes.
const path = require("path");
const express = require("express");
const router = express.Router();

// Route to serve landing page.
router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route to serve add exercise page.
router.get("/exercise", function (req, res) {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Route to serve stats page.
router.get("/stats", function (req, res) {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
