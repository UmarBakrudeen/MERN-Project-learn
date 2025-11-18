import Comment from "../models/comments.model.js";

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postComment = async (req, res) => {
  try {
    const newComment = new Comment({
      name: req.body.name,
      email: req.body.email,
      body: req.body.body,
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, body } = req.body;

    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    comment.name = name || comment.name;
    comment.email = email || comment.email;
    comment.body = body || comment.body;

    const updatedComment = await comment.save();
    res.json(updatedComment);
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  res.send(`Delete comment with ID: ${req.params.id}`);
};
