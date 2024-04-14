exports.signupForm = (req, res) => {
    res.render('signuplogin.handlebars');
};
exports.signup = (req, res) => {
    res.redirect('signuplogin')
};
exports.loginForm = (req, res) => {
    res.redirect('signuplogin')
};
exports.login = (req, res) => {
    res.redirect('dashboard');
}
exports.logout = (req, res) => {
    res.redirect('/');
};
