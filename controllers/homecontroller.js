// controllers/homeController.js
exports.index = (req, res) => {
    console.log('****Rendering homepage******');
    res.render('home'); // Assuming home.handlebars is in the views directory
};
