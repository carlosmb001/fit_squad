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
    workout: {
      type: DataTypes.STRING,
      allowNull: false,
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