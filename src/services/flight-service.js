const { FlightRepository, AirplaneRepository } = require("../repository/index");
const compareTime = require("../utils/helper");

class FlightService {
  constructor() {
    this.airPlaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival Time cannot be less than departure time" };
      }

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

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Somthing went wrong at service layer");
    }
  }
}

module.exports = FlightService;
