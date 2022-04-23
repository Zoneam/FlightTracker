const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    createFlight,
    allFlights
  };

  // done
function newFlight(req, res) {
    res.render('flights/create');
}
//done
function allFlights(req, res) {
    // console.log("Calling Flights:")
    Flight.find({}, function(err, flights) {
        // console.log("Flights: ",flights)
        res.render('flights/viewflights', { flights });
      });
}
// done
function createFlight(req, res) {
    console.log(req.body)
const flight = new Flight(req.body);
flight.save(function(err) {
  if (err) return res.render('/flights');
  res.redirect('/flights');
});
}

