const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);

    return res.status(200).json({
      data: response,
      message: "Successfully created the airport",
      error: {},
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      error: error,
      message: "Cannot create a new Airport",
    });
  }
};

module.exports = {
  create,
};
