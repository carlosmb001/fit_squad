const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login',{
        logged_in: false,
    });
});

module.exports = router;
