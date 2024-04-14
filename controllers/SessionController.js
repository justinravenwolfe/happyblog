exports.signupForm = (req, res) => {
    res.render('../views/signuplogin.handlebars');
};
exports.signup = (req, res) => {
    res.redirect('../views/signuplogin.handlebars')
};
exports.loginForm = (req, res) => {
    res.redirect('../views/signuplogin.handlebars')
};
exports.login = (req, res) => {
    res.redirect('../views/dashboard.handlebars');
}
exports.logout = (req, res) => {
    res.redirect('/');
};
