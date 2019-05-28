module.exports = function(req, res, next) {
  console.log(`put : ${JSON.stringify(req.body.joke, null, 2)}`)
  res.send('respond with a resource');
};
