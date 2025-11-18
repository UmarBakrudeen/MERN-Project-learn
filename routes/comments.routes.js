import express from "express";
import {
  getComments,
  postComment,
  updateComment,
  deleteComment,
} from "../controllers/comments.controller.js";

const router = express.Router();

router.get("/", getComments);

router.post("/", postComment);

router.put("/:id", updateComment);

router.delete("/:id", deleteComment);

export default router;
