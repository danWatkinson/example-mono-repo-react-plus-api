
module.exports = function(req, res, next) {
  const {id} = req.params;
  res.send(req.data.getById(id));
};
