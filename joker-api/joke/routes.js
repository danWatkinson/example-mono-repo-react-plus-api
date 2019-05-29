const router = require('express').Router();

const JokeDAO = require('./JokeDAO');
const dao = new JokeDAO();

router.get('/',function(req, res, next) {
  res.json(dao.list());
});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;

  if (id == 'random') {
    res.json(dao.getRandomJoke())
  } else {
    res.json(dao.getById(id));
  }
});

router.put('/', function(req, res, next) {
  const {joke} = req.body;

  res.json(dao.put(joke));
});

module.exports = router;
