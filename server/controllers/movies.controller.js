import Movie from "../models/movie.model.js";
import { getIndianTime } from "../utils/common.utils.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie || movie.length === 0 || movie === null) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMovies = async (req, res) => {
  const exits = await Movie.findOne({ title: req.body.title });

  if (exits) {
    return res.status(400).json({ message: "Movie already exists" });
  }

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
    createdAt: getIndianTime(),
    updatedAt: getIndianTime(),
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    if (title && title !== movie.title) {
      const titleExists = await Movie.findOne({ title });

      if (titleExists) {
        return res
          .status(400)
          .json({ message: "Another movie with this title already exists" });
      }
    }

    movie.title = title ?? movie.title;
    movie.desc = desc ?? movie.desc;
    movie.updatedAt = getIndianTime();

    const updateMovie = await movie.save();
    res.json(updateMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMovies = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
