import dotenv from "dotenv";
dotenv.config();
import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// For getting all the posts

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const query = {};

  console.log(req.query);

  const cat = req.query.cat;
  const author = req.query.author;
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;
  const featured = req.query.featured;

  if (cat) {
    query.category = cat;
  }

  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }

  if (author) {
    const user = await User.findOne({ username: author }).select("_id");
    query.user = user._id;
  }

  let sortObj = { createdAt: -1 };

  if (sortQuery) {
    switch (sortQuery) {
      case "newest":
        sortObj = { createdAt: -1 };
        break;
      case "oldest":
        sortObj = { createdAt: 1 };
        break;
      case "popular":
        sortObj = { visit: -1 };
        break;
      case "trending":
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        };
        break;
      default:
        break;
    }
  }

  try {
    const posts = await Post.find(query)
      .populate("user", "username email img clerkUserId")
      .sort(sortObj)
      .limit(limit)
      .skip((page - 1) * limit);

    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;

    res.status(200).json({ posts, hasMore });
  } catch (error) {
    res.status(500).json({ error });
    console.log({ message: "Error in getPosts", error });
  }
};

// For getting single post

export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate(
      "user",
      "username img clerkUserId email "
    );
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
    console.log({ message: "Error in getPost", error });
  }
};

// For creating a post

export const createPost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
      return res.status(401).json("not authenticated");
    }
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(401).json("User not found");
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    let existingPost = await Post.findOne({ slug });

    let counter = 2;
    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }
    const newPost = new Post({ user: user._id, slug, ...req.body });

    const post = await newPost.save();
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
    console.log({ message: "Error in createPost", error });
  }
};

// For deleting a post

export const deletePost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
      return res.status(401).json("not authenticated");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role === "admin") {
      await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json("Post has been deleted successfully");
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(401).json("User not found");
    }
    const deletePost = await Post.findOneAndDelete({
      _id: req.params.id,
      user: user._id,
    });

    if (!deletePost) {
      return res.status(403).json("You can delete only your posts");
    }
    res.status(201).json("Post has been deleted successfully");
  } catch (error) {
    res.status(500).json({ error });
    console.log({ message: "Error in deletePost", error });
  }
};



export const featurePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;
  
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }
  
  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role !== "admin") {
    return res.status(403).json("You cannot feature posts!");
  }
  
  const post = await Post.findById(postId);

  if (!post) {
    return res.status(404).json("Post not found!");
  }
  
  const isFeatured = post.isFeatured;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      isFeatured: !isFeatured,
    },
    { new: true }
  );

  res.status(200).json(updatedPost);
};


const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_SECRET_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};