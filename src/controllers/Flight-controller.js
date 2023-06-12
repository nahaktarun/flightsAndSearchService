const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  const flightRequestData = {
    flightNumber: req.body.flightNumber,
    airplaneId: req.body.airplaneId,
    departureAirportId: req.body.departureAirportId,
    arrivalAirtportId: req.body.arrivalAirtportId,
    arrivalTime: req.body.arrivalTime,
    departureTime: req.body.departureTime,
    price: req.body.price,
  };

  try {
    const flight = await flightService.createFlight(flightRequestData);
    console.log(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched all the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get  all flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
