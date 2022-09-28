const express = require('express');                     // import express
const route = express.Router()                          // create router

const services = require('../services/render');         // import services
const controller = require('../controller/controller'); // import controller

// -------------------- PAGE ROUTING --------------------
/**
 *  @description Routing dari root page
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description Routing untuk menambahkan page add new data 
 *  @method GET /input-data
 */
route.get('/input-data', services.input_data)

/**
 *  @description Routing untuk memperbarui page penjualan
 *  @method GET /penjualan-lpg
 */
 route.get('/penjualan-lpg', services.penjualan_lpg)

/**
 *  @description Routing untuk memperbarui page update elpiji 
 *  @method GET /update-data
 */
route.get('/update-data', services.update_data)


// ------------------------------ API ROUTING ------------------------------
/**
 * @description mencari data elpiji dengan id ataupun tanpa id
 * jika id tidak disediakan, system akan return semua data elpiji
 * @method GET /api/lpg
 * @method GET /api/lpg?id={id}
 */
route.get('/api/lpg', controller.find);

/**
 * @description Membuat new data elpiji
 * @method POST /api/lpg
 */
route.post('/api/lpg', controller.create);

/**
 * @description Memperbarui data elpiji with id
 * @method POST /api/lpg
 * @param req.params.id
 */
route.put('/api/lpg/:id', controller.update);

/**
 * @description Delete specified elpiji terspesifikasi dengan  id
 * @method DELETE /api/lpg/:id
 * @param req.params.id
 */
route.delete('/api/lpg/:id', controller.delete);

// Export route
module.exports = route