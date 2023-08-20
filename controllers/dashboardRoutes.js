const router = require("express").Router();
const { logAuth } = require('../utils/auth')
const { Workout,Goal, Post, User } = require('../models')
router.get("/", logAuth, async (req, res) => {

  try {

    const workouts = await Workout.findAll({});

    const plainWorkouts = workouts.map((workout) => {
      return workout.get({ plain: true });
    });

    const goals = await Goal.findAll({
          where: {
            user_id: req.session.user_id,
        },
        include: [{ model: Workout}],
    });

    const plainGoals = goals.map((goal) => {
      return goal.get({ plain: true });
    });

    const posts = await Post.findAll({
         where: {
           user_id: req.session.user_id,
       },
       include: [{ model: Workout}, {model:Goal}],
   });

   const plainPosts = posts.map((post) => {
     return post.get({ plain: true });
   });

   const userData = await User.findOne({ where: { id: req.session.user_id } });


    console.log( {
      user:userData.get({ plain: true }),
      workouts:plainWorkouts,
      goals:plainGoals,
      posts:plainPosts,

      logged_in: req.session.logged_in,
    })

    res.render("dashboard", {
      user:userData.get({ plain: true }),
      workouts:plainWorkouts,
      goals:plainGoals,
      posts:plainPosts,
      logged_in: req.session.logged_in,
    });

  } catch (e) {
    console.error(e);
    res.status(500).end();
  }

  
});

module.exports = router;
