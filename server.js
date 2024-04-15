// server.js
const express = require('express');
const session = require('express-session');
const routes = require('./routes/routes.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection.js');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 80;

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
// Define the 'block' helper


// Inform Express.js on which template engine to use
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

hbs.handlebars.registerHelper('block', function(name) {
  const blocks = this._blocks;
  const content = blocks && blocks[name];
  return content ? content.join('\n') : null;
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session(sess));
app.use(cors({
  origin: 'https://happyblog-c3d99f0a3728.herokuapp.com/', // replace with the domain of your client-side app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
