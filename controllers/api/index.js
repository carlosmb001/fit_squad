const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');
const postRoutes = require('./postRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/user', userRoutes);
router.use('/goals', goalRoutes);
router.use('/posts', postRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
