const router = require("express").Router();
const { logAuth } = require('../utils/auth')

router.get("/", logAuth, (req, res) => {
  res.render("profile", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;