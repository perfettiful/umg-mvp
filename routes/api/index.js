const router = require('express').Router();
const isrcRoutes = require('./isrcRoutes');

router.use('/isrc', isrcRoutes);

module.exports = router;
