const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars'); 

const commentController = require('../controllers/commentController.js');
const postController = require('../controllers/postController.js');
const userController = require('../controllers/userController.js');
const dashboardController = require('../controllers/DashboardController.js');
const SessionController = require('../controllers/SessionController.js');
const homeController = require('../controllers/homecontroller.js'); 

// Homepage route
router.get('/', homeController.index);

// Signup routes
router.get('/signup', SessionController.signupForm);
router.post('/signup', SessionController.signup);

// Login routes
router.get('/login', SessionController.loginForm);
router.post('/login', SessionController.login);

// Logout route
router.get('/logout', SessionController.logout);

// Dashboard routes
router.get('/dashboard', dashboardController.index);
router.post('/posts', dashboardController.createPost);
router.delete('/posts/:id', dashboardController.deletePost);
router.put('/posts/:id', dashboardController.updatePost);

// Post routes
router.get('/posts/:id', postController.show);
router.post('/posts/:id/comments', commentController.create);


module.exports = router;
