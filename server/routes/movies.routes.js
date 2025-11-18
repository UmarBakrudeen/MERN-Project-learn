import express from "express";
import {
  getMovies,
  createMovies,
  updateMovies,
  deleteMovies,
  movieDetails,
} from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", movieDetails);
router.post("/", createMovies);
router.put("/:id", updateMovies);
router.delete("/:id", deleteMovies);

export default router;
