const express = require('express');                     // import express
const route = express.Router()                          // create router

const services = require('../services/render');         // import services
const controller = require('../controller/controller'); // import controller
const summaryController = require('../controller/summaryController'); // import controller

const { protect } = require('../middleware/authMiddleware')

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
route.get('/input-data', protect, services.input_data)

/**
 *  @description Routing untuk memperbarui page penjualan
 *  @method GET /penjualan-lpg
 */
route.get('/penjualan-lpg', services.penjualan_lpg)

/**
 *  @description Routing untuk memperbarui page update elpiji 
 *  @method GET /update-data
 */
route.get('/update-data', protect, services.update_data)


// ------------------------------ API ROUTING ------------------------------
/**
 * @description mencari data elpiji dengan id ataupun tanpa id
 * jika id tidak disediakan, system akan return semua data elpiji
 * @method GET /api/lpg
 * @method GET /api/lpg?id={id}
 */
route.get('/api/lpg', protect, controller.find);

/**
 * @description Membuat new data elpiji
 * @method POST /api/lpg
 */
route.post('/api/lpg', protect, controller.create);

/**
 * @description Memperbarui data elpiji with id
 * @method POST /api/lpg
 * @param req.params.id
 */
route.put('/api/lpg/:id', protect, controller.update);

/**
 * @description Delete specified elpiji terspesifikasi dengan  id
 * @method DELETE /api/lpg/:id
 * @param req.params.id
 */
route.delete('/api/lpg/:id', protect, controller.delete);

/**
 * @description mengambil data untuk halaman dashboard
 * @method GET /api/dashboard
 */
route.get('/api/dashboard', protect, summaryController.get);


const {
    registerUser,
    loginUser,
    getMe,
} = require('../controller/userController')

route.post('/api/register', registerUser)
route.post('/api/login', loginUser)
route.get('/api/me', protect, getMe)


// Export route
module.exports = route