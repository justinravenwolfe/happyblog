const Comment = require('../models/Comment.js');

exports.create = async (req, res) => {
    try{
        const postId = req.params.id;
        const { body } = req.body;
        const comment = await Comment.create({
            body,
            postId,
        });
        res.redirect(`/posts/${postId}`); 
    } catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error'); 
    }
}; 