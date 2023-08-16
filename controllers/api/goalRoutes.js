const router = require("express").Router();
const { Goal } = require("../../models");
const { apiAuth } = require("../../utils/auth")


// Get all goals
router.get("/:id", async (req, res) => {

    try {
      const goalData = await Goal.findAll({
        where: {
          id: req.params.id,
        },
        include: [{ all: true, nested: true }],
      });

      if (!goalData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(goalData);

    } catch (err) {
      res.status(500).json(err);
    }
});


// Get all goals
router.get("/", async (req, res) => {

  try {
    const goals = await Goal.findAll({
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(goals);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// create a new goal
router.post("/", apiAuth , async (req, res) => {
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
router.put("/:id", apiAuth, async (req, res) => {
  try {

    const updatedGoal = await Goal.update({
      ...req.body,
      user_id: req.session.user_id,
    }, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });

    res.status(200).json(updatedGoal);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }

});



// delete a goal
router.delete("/:id", apiAuth, async (req, res) => {
  try {
    const delData = await Goal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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