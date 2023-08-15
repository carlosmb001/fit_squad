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

  const workouts = await Workout.bulkCreate(workoutData, {
    individualHooks: true,
    returning: true,
  })

  /*const goals = await Goal.bulkCreate(goalData, {
    individualHooks: true,
    returning: true,
  });*/

  let goals = []
  
  for (const goal of goalData) {
    const goalrec = await Goal.create({
      ...goal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      workout_id: workouts[Math.floor(Math.random() * workouts.length)].id,
    });
    goals.push(goalrec)

  }

  /*const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });*/

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      workout_id: workouts[Math.floor(Math.random() * workouts.length)].id,
      goal_id: goals[Math.floor(Math.random() * goals.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
