const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
module.exports = {
  addTicket,
  new: newTicket,
  create,
};

function addTicket(req, res) {
  const ticket = new Ticket(req.body);
  ticket.flight = req.params.id;
  ticket.save(function (err) {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("tickets/new", {
      flight,
    });
  });
  // Ticket.find({}, function (err, tickets) {
  //   console.log(tickets);
  //   res.render("tickets/new", {
  //     tickets,
  //   });
  // });
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    ticket.flight = console.log(ticket);
    res.redirect("tickets/new");
  });
}
