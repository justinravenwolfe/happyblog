const commentController = require('./comment.js');
const postController = require('./post.js');
const userController = require('./users.js');
const dashboardController = require('./DashboardController.js');
const SessionController = require('./SessionController.js');
const homeController = require('./DashboardController.js'); 

module.exports = {
    commentController,
    postController,
    userController, 
    dashboardController,
    SessionController,
    homeController 
}; 