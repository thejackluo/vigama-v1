const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  // general information
  general: {
    id: { type: String, required: true },
    userid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },

  // productivity data
  productivity: {
    // all time tasks, habits, and goals with num of total completions (import from ./productivity/TaskModel.js, ./productivity/HabitModel.js, ./productivity/GoalModel.js)
    tasks: {
      list: [{ type: String, required: true }],
      total: { type: Number, required: true },
    },
    habits: {
      list: [{ type: String, required: true }],
      total: { type: Number, required: true },
    },
    goals: {
      list: [{ type: String, required: true }],
      total: { type: Number, required: true },
    },

    // completed tasks, habits, and goals for the day
    completedTasks: {
      list: [{ type: String, required: true }],
      total: { type: Number, required: true },
    },
    completedHabits: {
      list: [{ type: String, required: true }],
      total: { type: Number, required: true },
    },
    completedGoals: {
      list: [{ type: String, required: true }],
      total: { type: Number, required: true },
    },
  },

  // import game data from ./game/GameModel.js
});

module.exports = mongoose.model("post", ProfileSchema);
