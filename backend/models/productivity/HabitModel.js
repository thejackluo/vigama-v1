const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema();

module.exports = mongoose.model("post", HabitSchema);
