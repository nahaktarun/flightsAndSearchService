const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airPlaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      const airplane = await this.airPlaneRepository.getAirplane(
        data.airplaneId
      );
      console.log(data);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Somthing went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;