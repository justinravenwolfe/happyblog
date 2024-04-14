const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE', //If user deleted everything else would be deleted
});
Post.hasMany(Comment, {
    foreignKey: 'postId', //post id is mapped to every comment on that post 
    onDelete: 'CASCADE', //If a post deleted, so are comments
}); 
Comment.belongsTo(User, {
    foreignKey: 'userId', //User id mapped to every element
    onDelete: 'CASCADE', //Once user deleted, all comments also delete
});
module.exports = {User, Post, Comment}; 