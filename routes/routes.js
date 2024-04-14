const express = require('express');
const router = express.Router();



const UserController = require('../controllers/userController');
const PostController = require('../controllers/PostController');
const CommentController = require('./controllers/commentController');

// Homepage route
router.get('/', './views/home.handlebars');

// Signup and login routes
router.get('/signup', './views/signuplogin.handlebars');
router.post('/signup',  './views/signuplogin.handlebars');
router.get('/login',  './views/signuplogin.handlebars');
router.post('/login',  './views/signuplogin.handlebars');

// Logout route
router.get('/logout', SessionController.logout);

// Dashboard routes
router.get('/dashboard', './views/dashboard.handlebars');
router.post('/posts', './views/post.handlebars');
router.delete('/posts/:id', DashboardController.deletePost);
router.put('/posts/:id', DashboardController.updatePost);

// Post routes
router.get('/posts/:id', PostController.show);
router.post('/posts/:id/comments', CommentController.create);

module.exports = router;
