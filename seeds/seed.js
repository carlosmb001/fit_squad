const sequelize = require("../config/connection");
const { User, Goal, Post } = require("../models");

const userData = require("./userData.json");
const goalData = require("./goalData.json");
const postData = require("./postData.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const goals = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const post = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
