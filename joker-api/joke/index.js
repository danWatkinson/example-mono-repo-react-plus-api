const router = require('express').Router();
const data = require('./data');

router.use(data);

router.get('/',    require('./list'));
router.get('/:id', require('./get'));

router.put('/',    require('./put'));

module.exports = router;
