const Flight = require("../models/flight");

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function () {
    console.log(flight);
    res.redirect("/flights/new");
  });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
};
