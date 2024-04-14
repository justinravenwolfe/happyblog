const Post = require('../models/Post.js');
exports.show = async(req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findByPk(postId);
        if(!post){
            return res.status(404).send('Post not found');
        }
        res.render('post', {post});;
    } catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error'); 
    }
};