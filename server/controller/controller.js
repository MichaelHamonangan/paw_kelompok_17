// import elpiji model
const Elpijidb = require('../model/model');

/**
 * @description Create and save new elpiji data
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req,res)=>{
    // validate the request
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    // create new elpiji
    const elpiji = new Elpijidb({
        tanggal : req.body.tanggal,
        kode : req.body.kode,
        nama: req.body.nama,
        keterangan : req.body.keterangan,
        tabung_transfer: req.body.tabung_transfer,
        tabung_tunai : req.body.tabung_tunai,
        bayar_transfer: req.body.bayar_transfer,
        bayar_tunai : req.body.bayar_tunai
    })

    // save elpiji in the database
    elpiji
        .save(elpiji)
        .then(data => {
            //res.send(data)
            res.redirect('/input-data');
        })
        // catch the error
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

/**
 * @description Retrieve and return all lpg/ retrive and return a single elpiji
 * @param {*} req 
 * @param {*} res 
 * @param req.query.id (optional)
 */
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Elpijidb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Tidak ditemukan data dengan id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error mendapatkan data dengan id " + id})
            })

    }else{
        Elpijidb.find()
            .then(elpiji => {
                res.send(elpiji)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error terjadi dalam mendapatkan informasi" })
            })
    }

    
}

/**
 * @description Update a new identified elpiji by elpiji id
 * @param {*} req req.body Data cannot be empty
 * @param {*} res 
 */
exports.update = (req, res)=>{
    // check if body request is empty, if empty responds with error message
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data tidak boleh kosong"})
    }

    // get the id from the request parameter
    const id = req.params.id;

    // update the elpiji with id data from request params
    Elpijidb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            // if data is not found, send error message response, if data is found then respond witgh data
            if(!data){
                res.status(404).send({ message : `Tidak dapat melakukan Update data dengan  ${id}!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            // if error, send error message response
            // status 500 means internal server error
            res.status(500).send({ message : "Error dalam mengupdate informasi"})
        })
}

/**
 * @description Delete an elpiji with specified elpiji id in the request parameter
 * @param {*} req req.params.id needed to delete the spesific data
 * @param {*} res 
 */
exports.delete = (req, res)=>{
    const id = req.params.id;

    // delete the elpiji with id data from request params
    Elpijidb.findByIdAndDelete(id)
        .then(data => {
            // if data is not found, send error message response, if data is found then send success message response
            if(!data){
                // status 404 means not found
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Data telah sukses dihapus!"
                })
            }
        })
        // catch the error
        .catch(err =>{
            // if error, send error message response
            // status 500 means internal server error
            res.status(500).send({
                message: "Tidak dapat menghapus data dengan id " + id
            });
        });
}