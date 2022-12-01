// import model
const Elpijidb = require('../model/model');

/**
 * @description membuat dan menyimpan data elpiji baru
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req,res)=>{
    // validasi request
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    // membuat data elpiji baru
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

    // menyimpan data elpiji ke database
    elpiji
        .save(elpiji)
        // console.log(elpiji)
        .then(elpiji => {
            console.log("test" + elpiji)
            res.status(200).send({
                status : 200,
                message : "Create elpiji data success"
            })
        })
        // catch jika terjadi error
        .catch(err =>{
            console.log("error" + err)
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}

/**
 * @description Retrieve dan return semua lpg/ retrive dan return sebuah elpiji
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
 * @description Update a data elpiji teridentifikasi dengan id
 * @param {*} req req.body Data tidak dapat bernilai kosong
 * @param {*} res 
 */
exports.update = (req, res)=>{
    // cek jika body pada request kosong, jika kosong maka system akan meresepon dengan error message
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data tidak boleh kosong"})
    }

    // dapatkan id dari parameter request
    const id = req.params.id;

    // update data elpiji dengan id dari parameter request
    Elpijidb
        .findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(elpiji => {
            // jika data tidak ditemukan, system akan mengirim respons berupa error message
            // jika data ditemukan, maka system akan meresepon dengan data
            if(!elpiji){
                res.status(404).send({ message : `Tidak dapat melakukan Update data dengan id  ${id}!`})
            }else{
                res.send(elpiji)
            }
        })
        .catch(err =>{
            // jika error, system akan merespon dengan error message 
            // status 500 means internal server error
            res.status(500).send({ message : "Error dalam mengupdate informasi"})
        })
}

/**
 * @description Menghapus data elpiji dengan yang elpiji id telah dispesifikasi dalam parameter request
 * @param {*} req req.params.id diperlukan untuk menghapus data spesifik
 * @param {*} res 
 */
exports.delete = (req, res)=>{
    const id = req.params.id;

    // menghapus data elpiji dengan id dari parameter request 
    Elpijidb.findByIdAndDelete(id)
        .then(data => {
            // jika data tidak ditemukan, system akan mengirim respons berupa error message
            // jika data ditemukan, maka system akan merespon dengan success message
            if(!data){
                // status 404 means not found
                res.status(404).send({ message : `Tidak dapat menghapus data dengan id ${id}. Dimungkinkan adanya kesalahan id`})
            }else{
                res.send({
                    message : "Data telah berhasil dihapus!"
                })
            }
        })
        // catch jika terjadi error
        .catch(err =>{
            // jika error, system akan mengirim respons berupa error message
            // status 500 means internal server error
            res.status(500).send({
                message: "Tidak dapat menghapus data dengan id " + id
            });
        });
}