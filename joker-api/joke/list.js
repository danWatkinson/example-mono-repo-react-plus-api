module.exports = function(req, res, next) {
  res.send(req.data.list());
};
