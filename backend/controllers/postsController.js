const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");      

exports.getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();
    res.json({ success: true, data: posts });
});

exports.getPost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = await Post.findOne({ _id: id });
    res.json({ success: true, data: post });
});
