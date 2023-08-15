const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const authRoutes = require('./authRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/user', authRoutes);

module.exports = router;
