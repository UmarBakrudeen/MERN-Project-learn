import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
