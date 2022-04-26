var express = require('express');
var router = express.Router();
const detailsCtrl = require('../controllers/details')

router.get('/flights/:id/details' , detailsCtrl.getDetails);

router.post('/flights/:id/details' , detailsCtrl.addDetails);

module.exports = router;
