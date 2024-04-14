const commentController = require('./commentController.js');
const postController = require('./postController.js');
const userController = require('./userController.js');
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