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
//
function createFlight(req, res) {
    console.log(req.body)
  // convert nowShowing's checkbox of nothing or "on" to boolean
// remove any whitespace at start and end of cast
// split cast into an array if it's not an empty string - using a regular expression as a separator
const flight = new Flight(req.body);
flight.save(function(err) {
  // one way to handle errors
  if (err) return res.render('/flights');
  // for now, redirect right back to new.ejs
  res.redirect('/flights');
});
}

