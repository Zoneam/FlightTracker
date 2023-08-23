const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    getDetails,
    addDetails
  };

  async function addDetails(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      flight.destinations.push(req.body);
      await flight.save();
      res.redirect(`/flights/${flight._id}/details`);
    } catch (err) {
      console.error(err);
      res.redirect(`/flights/${req.params.id}/details`);
    }
  }
  

  async function getDetails(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      const tickets = await Ticket.find({flight: flight._id});
      res.render("flights/details", { flight, tickets });
    } catch (err) {
      console.error(err);
      res.render("flights/details");
    }
  }