const router = require('express').Router();
const data = require('./data-middleware');

router.use(data);

router.get('/',function(req, res, next) {
  const {dao} = req;

  res.send(dao.list());
});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  const {dao} = req;

  res.send(dao.getById(id));
});

router.put('/', function(req, res, next) {
  const {joke} = req.body;
  const {dao} = req;

  res.send(dao.put(joke));
});

module.exports = router;
