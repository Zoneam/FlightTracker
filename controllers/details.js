const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    getDetails,
    addDetails
  };

  function addDetails(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}/details`);
      });
    });
  }

  function getDetails(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, ticket) {
        res.render("flights/details", { flight, ticket });
      })
    });
  }

  