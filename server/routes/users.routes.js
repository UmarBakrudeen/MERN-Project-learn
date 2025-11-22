import express from "express";
import {
  login,
  signup,
  getUsers,
  getProfile,
  updateProfile,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getUsers); // For testing - get all users

// Protected routes (token required in Authorization header)
router.get("/profile", getProfile);
router.post("/profile", updateProfile);

export default router;
