const JokeData = require('./JokeData');
const data = new JokeData();

module.exports = function (req, res, next) {
  req.data = data;
  next();
}
