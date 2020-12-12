// Require express and router.
const express = require("express");
const router = express.Router();

// Get the models.
const db = require("../models");

// Route to get all workouts.
router.get("/api/workouts", (req, res) => {
	db.Workout.find({})
	.then(dbWorkouts => res.json(dbWorkouts))
	.catch(err => res.json(err));
});

// Route to add a new workout.
router.post("/api/workouts", (req, res) => {
	db.Workout.create({})
	.then(dbWorkout => res.json(dbWorkout))
	.catch(err => res.json(err));
});

// Route to add an exercise
router.put("/api/workouts/:id", ({ params, body }, res) => {
	db.Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
	.then(dbWorkout => res.json(dbWorkout))
	.catch(err => res.json(err));
});

// Route to get all workouts for stats page.
router.get("/api/workouts/range", (req, res) => {
	db.Workout.find({})
	.then(dbWorkouts => res.json(dbWorkouts))
	.catch(err => res.json(err));
});

module.exports = router;
