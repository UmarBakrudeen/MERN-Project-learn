import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
