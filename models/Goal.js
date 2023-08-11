const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Goal extends Model {}

Goal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTERGER,
      allowNull: false,
    },
    workout_id: {
      type: DataTypes.INTERGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTERGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "goal",
  }
);

module.exports = Goal;
