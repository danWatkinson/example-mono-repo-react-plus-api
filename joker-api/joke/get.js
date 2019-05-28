module.exports = function(req, res, next) {
  console.log(`get by id: ${req.params.id}`)
  res.send('respond with a resource');
};
