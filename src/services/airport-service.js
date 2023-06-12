const CrudService = require("./crud-service");
const { AirportRespository } = require("../repository/index");

class AirportService extends CrudService {
  constructor() {
    const AirportRepository = new AirportRespository();
    super(AirportRepository);
  }
}

module.exports = AirportService;
