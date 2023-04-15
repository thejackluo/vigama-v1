const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema();

module.exports = mongoose.model("post", TaskSchema);
