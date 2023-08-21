const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    createFlight,
    allFlights,
    deleteFlight
  };

// Create Flight form render
function newFlight(req, res) {
  const flightCreationData = Flight.getCreationData();
    res.render('flights/create', { flightCreationData });
}

// Rendering all Flights
async function allFlights(req, res) {
    try {
      const flights = await Flight.find({});
      res.render('flights/index', { flights });
    } catch (err) {
      res.redirect('/flights');
    }
}

// Creating Flight
async function createFlight({body: newFlightObj}, res) {
  try {
    await Flight.create(newFlightObj);
    res.redirect('/flights');
  } catch (err) {
    res.render('/flights');
  }
}

// Deleting Flight
async function deleteFlight({params: {id}}, res) {
  try {
    await Flight.findByIdAndRemove(id);
    res.redirect('/flights');
  } catch (err) {
    res.redirect('/flights');
  }
}