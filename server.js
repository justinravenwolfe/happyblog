// server.js
const express = require('express');
const session = require('express-session')


//TODO
const routes = require('./routes');

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


// Inform Express.js on which template engine to use
const hbs=require('express-handlebars');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
//Sending everything with JSONS <- Javascript object
app.use(express.json());
//Should not change 
app.use(express.static('public'));
app.use(session(sess));



// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// Start server

// node server.js <- running script 
