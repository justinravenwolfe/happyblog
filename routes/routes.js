const express = require('express');
const router = express.Router();

const HomeController = require('./controllers/HomeController');
const DashboardController = require('./controllers/DashboardController');
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');
const CommentController = require('./controllers/CommentController');

// Homepage route
router.get('/', HomeController.index);

// Signup and login routes
router.get('/signup', SessionController.signupForm);
router.post('/signup', SessionController.signup);
router.get('/login', SessionController.loginForm);
router.post('/login', SessionController.login);

// Logout route
router.get('/logout', SessionController.logout);

// Dashboard routes
router.get('/dashboard', DashboardController.index);
router.post('/posts', DashboardController.createPost);
router.delete('/posts/:id', DashboardController.deletePost);
router.put('/posts/:id', DashboardController.updatePost);

// Post routes
router.get('/posts/:id', PostController.show);
router.post('/posts/:id/comments', CommentController.create);

module.exports = router;
