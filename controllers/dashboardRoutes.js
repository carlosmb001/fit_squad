const router = require("express").Router();
const { logAuth } = require('../utils/auth')
const { User, Workout } = require("../models");

router.get("/", logAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.user_id);
  
  res.render("dashboard", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
