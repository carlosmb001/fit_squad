const logAuth = (req, res, next) => { //User Login
  if (!req.session.logged_in) {
    res.redirect("/user/login");
  } else {
    next();
  }
};

const apiAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(401).json({ message: 'Unauthorized request!' }); //Alerts User of unathorized request
    return
  } else {
    next();
  }
};

module.exports = { logAuth, apiAuth };
