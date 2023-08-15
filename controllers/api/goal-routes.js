const router = require("express").Router();
const { Goal } = require("../../models/Goal");

// create a new goal
router.post("/", async (req, res) => {
  try {
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a goal
router.put("/goal/:id", async (req, res) => {
  const { workout_description, duration, workout_id, user_id } = req.body;

  try {
    const goalData = await Goal.findOne({ id: id });
    if (!goalData) {
      res.status(404).json({ message: "No goal found with this id!" });
    }

    goalData.workout_description = workout_description;
    goalData.duration = duration;
    goalData.workout_id = workout_id;
    goalData.user_id = user_id;
    await goalData.save();

    res.status(200).json(goalData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a goal
router.delete("/goal/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Goal.deleteOne({ id: id });
    res.status(200).json({ message: "Goal deleted successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});
