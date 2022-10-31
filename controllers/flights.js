const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

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
function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, ticket) {
      console.log(flight);
      res.render("flights/destinations", {
        title: "Destination",
        flight,
        ticket,
      });
    });
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      console.log(flight);
      res.render("flights/destinations", {
        title: "Destination",
        flight,
        tickets,
      });
    });
  });
}
