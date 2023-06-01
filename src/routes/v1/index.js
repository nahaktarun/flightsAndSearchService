const express = require('express')
const cityController = require('../../controllers/city-controller');

const router = express.Router();




router.post('/city',cityController.create);





module.exports = router;
