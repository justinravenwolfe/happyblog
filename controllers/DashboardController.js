exports.index = (req, res) => {
    res.render('../views/dashboard.handlebars'); 
}
exports.createPost = (req, res) => {
    res.redirect('../views/dashboard.handlebars');
}
exports.deletePost = (req, res) => {
    res.redirect('../views/dashboard.handlebars');
}
exports.updatePost = (req, res) => {
    const postId = req.params.id; 
    res.redirect('../views/dashboard.handlebars');
}