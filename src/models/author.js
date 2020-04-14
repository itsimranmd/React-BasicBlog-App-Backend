const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Author = model("Author", AuthorSchema);

module.exports = Author;
