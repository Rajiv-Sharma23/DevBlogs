import User from "../models/user.model.js";
import Comment from "../models/comment.model.js";

export const getPostComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate("user", "username img clerkUserId email ")
      .sort({ createdAt: -1 });
    res.json({ comments });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    console.log("Error in getPostController", error);
  }
};
export const addComment = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const postId = req.params.postId;

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    const newComment = new Comment({
      ...req.body,
      user: user._id,
      post: postId,
    });

    const savedComment = await newComment.save();

    setTimeout(() => {
      res.status(201).json(savedComment);
    }, 1000);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    console.log("Error in addComment", error);
  }
};
export const deleteComment = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const id = req.params.id;

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role === "admin") {
      await Comment.findByIdAndDelete(req.params.id);
      return res.status(200).json("Comment has been deleted");
    }

    const user = await User.findOne({ clerkUserId });

    const deletedComment = await Comment.findOneAndDelete({
      _id: id,
      user: user._id,
    });

    if (!deletedComment) {
      return res.status(403).json("You can delete only your Comments");
    }

    res.status(200).json("Comment deleted Successfully");
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    console.log("Error in deleteComment", error);
  }
};
