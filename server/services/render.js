const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/lpg
    axios.get('http://localhost:3000/api/lpg')
        .then(function(response){
            res.render('index', { lpg : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.penjualan_lpg = (req, res) =>{
    axios.get('http://localhost:3000/api/lpg')
        .then(function(response){
            res.render('penjualan_lpg', { lpg : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.input_data = (req, res) =>{
    res.render('input_data');
}

exports.update_data = (req, res) =>{
    axios.get('http://localhost:3000/api/lpg', { params : { id : req.query.id }})
        .then(function(elpijidata){
            res.render("update_data", { elpiji : elpijidata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}