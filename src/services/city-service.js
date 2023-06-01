const { CityRepository } = require("../repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw { error };
    }
  }
  async updateCity(data) {
    try {
      const city = await this.cityRepository.updateCity(data);
      return city;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw { error };
    }
  }
}


module.exports = CityService;