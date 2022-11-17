/**
 * @description untuk membuat request dengan mengoper confiq yang relevan ke axios
 */
const axios = require('axios');

/**
 * @description Route dan render home page
 * @param {*} req 
 * @param {*} res 
 */
exports.homeRoutes = (req, res) => {
    // Membuat request 'ke /api/lpg
    axios.get('http://localhost:3000/api/lpg')
        .then(function(response){
            // render home page dengan data dari database
            res.render('index', { lpg : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

/**
 * @description Route dan render page penjualan
 * @param {*} req 
 * @param {*} res 
 */
exports.penjualan_lpg = (req, res) =>{
    axios.get('http://localhost:3000/api/lpg')
        .then(function(response){
            res.render('penjualan_lpg', { lpg : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

/**
 * @description untuk render page input data 
 * @param {*} req 
 * @param {*} res 
 */
exports.input_data = (req, res) =>{
    // render page input_data sebagai sebuah respons
    res.render('input_data');
}

/**
 * @description render page update data
 * @param {*} req 
 * @param {*} res 
 */
exports.update_data = (req, res) =>{
    axios.get('http://localhost:3000/api/lpg', { params : { id : req.query.id }})
        .then(function(elpijidata){
            // render page update_data dengan data dari database
            res.render("update_data", { elpiji : elpijidata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}