const Flight = require('../models/flight');

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
        res.render("flights/details", { flight });
    });
  }

  