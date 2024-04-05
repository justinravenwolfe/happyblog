// server.js
const express = require('express');
const session = require('express-session')


//TODO
const routes = require('./controllers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection.js'); // import your Sequelize instance


//npm install connect-session-sequelize

//const sequelize = require('./path/to/your/sequelize-instance'); // import your Sequelize instance



const app = express();
const PORT = process.env.PORT || 3000;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}; 

app.use(session(sess));
// Inform Express.js on which template engine to use
const hbs=require('express-handlebars');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
//Sending everything with JSONS <- Javascript object
app.use(express.json());
//Should not change 
app.use(express.static('public'));

/*
Resolved:
install missing packages
correct sequelize options
correct import/export

*/


// Routes
//app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// node server.js <- running script 
