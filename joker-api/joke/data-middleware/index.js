const JokeData = require('./JokeData');
const dao = new JokeData();

module.exports = function (req, res, next) {
  req.dao = dao;
  next();
}
