const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');

router.use('/user');
router.use('/mood');
router.use('/post');

module.exports = router;
