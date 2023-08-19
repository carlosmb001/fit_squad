const router = require("express").Router();
const { logAuth } = require('../utils/auth')
const { Workout, Goal, Post, User } = require('../models')

router.get("/", logAuth, async (req, res) => {
  try {
    const goals = await Goal.findAll({
      /*   where: {
           id: req.params.id,
       },*/
      include: [{ model: Workout }],
    });

    const plainGoals = goals.map((goal) => {
      return goal.get({ plain: true });
    });

    const posts = await Post.findAll({
      /*   where: {
           id: req.params.id,
       },*/
      include: [{ model: Workout }, { model: Goal }],
    });

    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const userPlainData = userData.get({ plain: true }); // Get user data

    const plainPosts = posts.map((post) => {
      return post.get({ plain: true });
    });


    console.log({
      user: userPlainData,
      goals: plainGoals,
      posts: plainPosts,
      logged_in: req.session.logged_in,
    })

    res.render("history", {
      user: userPlainData, // Pass user data to the view
      goals: plainGoals,
      posts: plainPosts,
      logged_in: req.session.logged_in,
    });

  } catch (e) {
    console.error(e);
    res.status(500).end();
  }

});

module.exports = router;