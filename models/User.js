const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: Schema.type.ObjectId,
  },
  name: {
    type: String,
    required: [true, "No name exist for this profile"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  age: {
    type: Number,
    min: 13,
    max: 65,
  },
  vigama: {
    level: Number,
    vigamaPoints: Number,
    skillPoints: Number,
    unrankedVigamaPoints: Number,
    habitPoints: Number,
  },
});

module.exports = mongoose.model("user", UserSchema);
