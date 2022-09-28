const express = require('express');                     // import express
const route = express.Router()                          // create router

const services = require('../services/render');         // import services
const controller = require('../controller/controller'); // import controller

// -------------------- PAGE ROUTING --------------------
/**
 *  @description Routing for root page
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description Routing for add new data page
 *  @method GET /input-data
 */
route.get('/input-data', services.input_data)

/**
 *  @description Routing for update elpiji page
 *  @method GET /penjualan-lpg
 */
 route.get('/penjualan-lpg', services.penjualan_lpg)

/**
 *  @description for update elpiji
 *  @method GET /update-data
 */
route.get('/update-data', services.update_data)


// ------------------------------ API ROUTING ------------------------------
/**
 * @description find elpiji with or without id
 * if id is not provided, it will return all elpiji
 * @method GET /api/lpg
 * @method GET /api/lpg?id={id}
 */
route.get('/api/lpg', controller.find);

/**
 * @description Create new elpiji
 * @method POST /api/lpg
 */
route.post('/api/lpg', controller.create);

/**
 * @description Update specified elpiji with id
 * @method POST /api/lpg
 * @param req.params.id
 */
route.put('/api/lpg/:id', controller.update);

/**
 * @description Delete specified elpiji with id
 * @method DELETE /api/lpg/:id
 * @param req.params.id
 */
route.delete('/api/lpg/:id', controller.delete);

// Export routes
module.exports = route