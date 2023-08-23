var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')
const detailsCtrl = require('../controllers/details')

router.get('/' , flightCtrl.allFlights);

router.get('/new' , flightCtrl.new);

router.post('/new' , flightCtrl.createFlight);

router.delete('/deleteflight/:id', flightCtrl.deleteFlight);

router.get('/:id/details' , detailsCtrl.getDetails);

router.post('/:id/details' , detailsCtrl.addDetails);

module.exports = router;
