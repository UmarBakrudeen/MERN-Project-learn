import mongoose from "mongoose";
import { getIndianTime } from "../utils/common.utils.js";

const movieSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// Middleware to update updatedAt before saving
movieSchema.pre("save", function (next) {
  this.updatedAt = getIndianTime();
  next();
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
