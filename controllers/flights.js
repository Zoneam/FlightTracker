const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    createFlight,
    allFlights,
    deleteFlight
  };

// Create Flight form render
function newFlight(req, res) {
    res.render('flights/create');
}
// Rendering all Flights
function allFlights(req, res) {
    Flight.find({}, function(err, flights) {
        // console.log("Flights: ",flights)
        res.render('flights/viewflights', { flights });
      });
}
// Createing Flight
function createFlight({body: newFlightObj}, res) {
  newFlightObj.departs === ''?newFlightObj.departs = undefined:newFlightObj.departs;

  // if (newFlightObj.departs === '') newFlightObj.departs = new Date(new Date().setFullYear(new Date().getFullYear()+1));
  const flight = new Flight(newFlightObj); 
  console.log("FLIGHT",flight)
  flight.save(function(err) {
    if (err) return res.render('/flights');
    res.redirect('/flights');
});
}

// Deleting Flight
function deleteFlight({params: {id}},res) {
  console.log("ID: ", id);
  Flight.deleteOne({_id: id},function(err){
    res.redirect('/flights');
  });
  
}