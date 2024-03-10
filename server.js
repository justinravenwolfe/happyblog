// server.js
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
//TODO
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
//All urls encrypted
/*
{
    "name": "John", 
}
*/
app.use(express.urlencoded({ extended: true }));
//Sending everything with JSONS <- Javascript object
app.use(express.json());
//Should not change 
app.use(express.static('public'));

// Express session
//symbols/numbers over any text 
app.use(session({ secret: 'lc45ZhOLBw', resave: true, saveUninitialized: true }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// node server.js <- running script 
