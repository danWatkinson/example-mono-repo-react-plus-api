const router = require('express').Router();
const data = require('./data-middleware');

router.use(data);

router.get('/',function(req, res, next) {
  const {dao} = req;

  res.json(dao.list());
});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  const {dao} = req;

  res.json(dao.getById(id));
});

router.put('/', function(req, res, next) {
  const {joke} = req.body;
  const {dao} = req;

  res.json(dao.put(joke));
});

module.exports = router;
