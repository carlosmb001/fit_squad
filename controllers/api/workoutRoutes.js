const router = require("express").Router();
const { Workout } = require("../../models");
const { apiAuth } = require("../../utils/auth")

// Get all workout
router.get("/:id", async (req, res) => {

    try {
      const workoutData = await Workout.findAll({
        where: {
          id: req.params.id,
        },
      });

      if (!workoutData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(workoutData);

    } catch (err) {
      res.status(500).json(err);
    }
});

// Get all posts
router.get("/", async (req, res) => {

  try {
    const workouts = await Workout.findAll({
    });
    res.status(200).json(workouts);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// create a new post
router.post("/", apiAuth , async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a post
router.put("/:id", apiAuth, async (req, res) => {
  try {

    const updatedWorkout = await Workout.update({
      ...req.body
    }, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(updatedWorkout);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }

});

// delete a post
router.delete("/:id", apiAuth, async (req, res) => {
  try {
    const delData = await Workout.destroy({
      where: {
        id: req.params.id
      },
    });
    if (!delData) {
      res.status(404).json({ message: 'No goal found with this id!' });
      return;
    }
    res.status(200).json(delData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;