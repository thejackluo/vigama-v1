const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  // general game info
    general: {
        xp: {
            type: Number,
            default: 0
        },
        level: {
            type: Number,
            default: 0
        },
        coins: {
            type: Number,
            default: 0
        },
});

module.exports = mongoose.model("Game", GameSchema);
