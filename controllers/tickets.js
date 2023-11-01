const Ticket = require('../models/ticket');

module.exports = {
    createTicket,
    newTicketView
  };
// adding tickets
async function createTicket(req, res) {
  try {
    req.body.flight = req.params.id;
    await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/flights/${req.params.id}`);
  }
}

// Rendering Add Ticket view
function newTicketView({ params: {id:id}}, res) {
    res.render('tickets/addticket', { id }  );
}
