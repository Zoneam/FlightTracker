var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets')

router.get('/flights/:id/tickets/new' , ticketCtrl.newTicketView);

router.post('/flights/:id/tickets/new', ticketCtrl.createTicket);

module.exports = router;