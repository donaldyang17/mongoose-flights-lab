const Ticket = require("../models/ticket");

module.exports = {
  addTicket,
  new: newTicket,
  create,
};

function addTicket(req, res) {
  Ticket.findById(req.params.id, function (err, ticket) {
    console.log(ticket);
    ticket.cast.push(req.body.ticketID);
    ticket.save(function (err) {
      res.redirect(`/flights/${ticket._id}`);
    });
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render("tickets/new", {
      tickets,
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect("tickets/new");
  });
}
