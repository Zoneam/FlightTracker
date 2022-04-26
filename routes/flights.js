var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

router.get('/' , flightCtrl.allFlights);

router.get('/new' , flightCtrl.new);

router.post('/new' , flightCtrl.createFlight);

router.delete('/deleteflight/:id', flightCtrl.deleteFlight);



module.exports = router;
