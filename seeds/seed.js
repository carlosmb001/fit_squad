const sequelize = require("../config/connection");
const { User, Goal, Post, Workout } = require("../models");

const userData = require("./userData.json");
const goalData = require("./goalData.json");
const postData = require("./postData.json");
const workoutData = require("./workoutData.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const workouts = await User.bulkCreate(workoutData, {
    individualHooks: true,
    returning: true,
  })

  const goals = await Goal.bulkCreate(goalData, {
    individualHooks: true,
    returning: true,
  });
  
  const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
