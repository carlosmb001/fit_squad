const router = require("express").Router();

router.get("/signup", (req, res) => {
    res.render("signup",{logged_in:false});
});

router.get("/login", (req, res) => {
    res.render("login",{logged_in: false});
});

router.get("/logout", (req, res, next) => {

    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.render("logout",{logged_in: false});
        });
    } else {
        res.render("logout",{logged_in: false});
    }
});

module.exports = router;