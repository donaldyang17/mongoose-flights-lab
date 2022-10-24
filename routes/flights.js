var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/new", flightsCtrl.new);
router.get("/index", flightsCtrl.index);
router.get("/:id", flightsCtrl.show);
router.post("/", flightsCtrl.create);

module.exports = router;
