const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const ApiRoutes = require("./routes/index");
const { Airport, City } = require("./models/index");

const setupAndStartServer = async () => {
  // create a express object
  const app = express();
  const PORT = 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    // const repo = new CityRepository();
    // repo.createCity({name: "Hyderabad"});
    // const airports = await Airport.findAll({include: City});
    // console.log(airports);

    // TODO: do the model sync to get all the data using methods.
    // TODO: Many to many association
  });
};

setupAndStartServer();
