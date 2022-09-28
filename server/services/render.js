/**
 * @description to create requests by passing the relevant config to axios
 */
const axios = require('axios');

/**
 * @description Route and render home page
 * @param {*} req 
 * @param {*} res 
 */
exports.homeRoutes = (req, res) => {
    // Make a get request to /api/lpg
    axios.get('http://localhost:3000/api/lpg')
        .then(function(response){
            // render the home page with the data from the database
            res.render('index', { lpg : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

/**
 * @description to render the input data page
 * @param {*} req 
 * @param {*} res 
 */
exports.input_data = (req, res) =>{
    // render the input_data page as a response
    res.render('input_data');
}

/**
 * @description render the update data page
 * @param {*} req 
 * @param {*} res 
 */
exports.update_data = (req, res) =>{
    axios.get('http://localhost:3000/api/lpg', { params : { id : req.query.id }})
        .then(function(elpijidata){
            // render the update_data page with the data from the database
            res.render("update_data", { elpiji : elpijidata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}