var express = require("express");
var router = express.Router();
const destinationsCtrl = require("../controllers/destinations");
const ticketsCtrl = require("../controllers/tickets");

router.post("/flights/:id/destinations", destinationsCtrl.create);

router.post("/flights/:id/tickets", ticketsCtrl.addTicket);
module.exports = router;
