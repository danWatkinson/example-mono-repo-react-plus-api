const router = require('express').Router();

router.get('/', require('./list'));
router.get('/:id', require('./get'));
router.put('/', require('./put'));

module.exports = router;
