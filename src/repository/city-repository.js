const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.Create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Somethign went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    const city = await City.update(data, {
      where: {
        id: cityId,
      },
    });
  }
}

module.exports = CityRepository;
