const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:30
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    mood_after: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    mood_before: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    achieved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    goal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'goal',
        key: 'id',
      },
    },
    workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workout',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;