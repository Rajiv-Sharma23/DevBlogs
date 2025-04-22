import Post from "../models/post.model.js"


// For getting all the posts

export const getPosts = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({posts});
    } catch (error) {
        res.status(500).json({error});
        console.log({message: "Error in getPosts",error});
        
    }
}

// For getting single post

export const getPost = async (req,res) => {
    try {
        const post = await Post.findOne({slug : req.params.slug});
        res.status(200).json({post});
    } catch (error) {
        res.status(500).json({error});
        console.log({message: "Error in getPost",error});
        
    }
}

// For creating a post

export const createPost = async (req,res) => {
    try {
        const newPost = new Post(req.body);

        const post = await newPost.save();
        res.status(201).json({post});
    } catch (error) {
        res.status(500).json({error});
        console.log({message: "Error in createPost",error});
        
    }
}

// For deleting a post 

export const deletePost = async (req,res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        res.status(201).json("Post has been deleted successfully");
    } catch (error) {
        res.status(500).json({error});
        console.log({message: "Error in deletePost",error});
        
    }
}