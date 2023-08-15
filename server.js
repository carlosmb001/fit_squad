const express = require('express');

const routes = require('./controllers');
const expressHandlebars = require('express-handlebars');

const helpers = require("./utils/helpers");
const path = require("path");

const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbsengine = expressHandlebars.create({
  helpers,
});

const app = express();
const PORT = process.env.PORT || 3001;

const sessionObj = {
  secret: 'One super squad secret key',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sessionObj));

app.engine('handlebars', hbsengine.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

//prevents page caching on browser to protect from back button navigation into protected resource after logout
app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next()
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
