const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/v1/api', apiRoutes);

module.exports = router;
