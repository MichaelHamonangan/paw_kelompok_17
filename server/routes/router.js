const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add lpg
 *  @method GET /input-data
 */
route.get('/input-data', services.input_data)

/**
 *  @description for update elpiji
 *  @method GET /update-data
 */
route.get('/update-data', services.update_data)


// API
route.post('/api/lpg', controller.create);
route.get('/api/lpg', controller.find);
route.put('/api/lpg/:id', controller.update);
route.delete('/api/lpg/:id', controller.delete);


module.exports = route