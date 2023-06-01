const express = require('express');
const bodyParser = require('body-parser');



const {PORT} = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () =>{

    // create a express object
    const app = express();
    const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name: "Hyderabad"});
        
    })
}

setupAndStartServer();
