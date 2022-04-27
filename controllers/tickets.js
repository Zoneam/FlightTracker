const Ticket = require('../models/ticket');

module.exports = {
    createTicket,
    newTicketView
  };
// adding tickets
function createTicket(req,res) {
    req.body.flight = req.params.id
    console.log(req.body)
    Ticket.create(req.body,  function(err, ticket) {
        res.redirect(`/flights/${req.params.id}/details`);
      });
}

// Rendering Add Ticket view
function newTicketView(req,res) {
    let id = req.params.id
    res.render('tickets/addticket', { id }  );
}
