const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true
  }
});

postSchema.virtual("CreatedAt").get(function() {
  return this.datetime;
});

const Post = model("Post", postSchema);

module.exports = Post;
