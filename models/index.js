const User = require('./User');
const Goal = require('./Goal');
const Post = require('./Post');
const Workout = require('./Workout');

//User to Goal Relation
User.hasMany(Goal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
Goal.belongsTo(User, {
    foreignKey: 'user_id'
});

//Goal to Post relation
Goal.hasMany(Post,{
    foreignKey: 'goal_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(Goal, {
    foreignKey: 'goal_id',
})

//User to Post relation
User.hasMany((Post), {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
  
Post.belongsTo(User,{
    foreignKey: 'user_id'
})

//Workout to Goal relation
Workout.hasMany(Goal,{
    foreignKey: 'workout_id',
    onDelete: 'CASCADE'
})

Goal.belongsTo(Workout,{
    foreignKey: 'workout_id'
})

//Workout to Post relation
Workout.hasMany(Post,{
    foreignKey: 'workout_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(Workout,{
    foreignKey: 'workout_id'
})

module.exports = { User, Goal, Post, Workout };
