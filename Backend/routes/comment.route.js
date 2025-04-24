import express from "express";

const router = express.Router();

router.get("/:postId",getComments);
router.post("/:postId",addComment);
router.delete("/:id",deleteComment);


export default router;