const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  general: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  reference: {
    person: {
      type: String,
      required: true,
    },
  },

  comments: [
    {
      person: String,
    },
  ],
});

module.exports = mongoose.model("post", UserSchema);
