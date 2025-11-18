import express from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.routes.js";
import commentsRouter from "./routes/comments.routes.js";
import connectDB from "./config/db.js";

const app = express();

// Load env first
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/movies", moviesRouter);
app.use("/comments", commentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// Reference:
// https://github.com/UmarBakrudeen/movieareas-api/tree/main
