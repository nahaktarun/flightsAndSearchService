const express = require("express");
const cityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/Flight-controller");
const AirportController = require("../../controllers/airtport-controller");
const { FlightMiddlewares } = require("../../middlewares/index");
const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destory);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);

router.post("/airports", AirportController.create);

module.exports = router;
