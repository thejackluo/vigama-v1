const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema();

module.exports = mongoose.model("post", GoalSchema);
