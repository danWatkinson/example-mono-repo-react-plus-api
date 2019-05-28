module.exports = function(req, res, next) {
  const {joke} = req.body;
  res.send(req.data.put(joke));
};
