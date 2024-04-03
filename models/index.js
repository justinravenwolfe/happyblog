const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE', //If user deleted everything else would be deleted
});
Post.hasMany(Comments, {
    foreignKey: 'postId', //post id is mapped to every comment on that post 
    onDelete: 'CASCADE', //If a post deleted, so are comments
}); 
Comment.belongTo(User, {
    foreignKey: 'userId', //User id mapped to every element
    onDelete: 'CASCADE', //Once user deleted, all comments also delete
});
module.exports = {User, Post, Comment}; 