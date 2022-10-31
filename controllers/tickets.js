const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
module.exports = {
  addTicket,
  new: newTicket,
  create,
};

function addTicket(req, res) {
  Flight.findById(req.params.id, function (err, ticket) {
    console.log("ticket added");
    ticket.flight.push(req.body.ticketID);
    ticket.save(function (err) {
      res.redirect(`/flights/${ticket._id}`);
    });
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    console.log(tickets);
    res.render("tickets/new", {
      tickets,
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    console.log(ticket);
    res.redirect("tickets/new");
  });
}
