var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')
const detailsCtrl = require('../controllers/details')

router.get('/' , flightCtrl.allFlights);

router.get('/new' , flightCtrl.new);

router.post('/new' , flightCtrl.createFlight);

router.delete('/:id', flightCtrl.deleteFlight);

router.get('/:id' , detailsCtrl.getDetails);

router.post('/:id' , detailsCtrl.addDetails);

module.exports = router;
