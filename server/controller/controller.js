var Elpijidb = require('../model/model');

// create and save new elpiji
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new elpiji
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
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all lpg/ retrive and return a single elpiji
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

// Update a new idetified elpiji by elpiji id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data tidak boleh kosong"})
    }

    const id = req.params.id;
    Elpijidb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Tidak dapat melakukan Update data dengan  ${id}!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error dalam mengupdate informasi"})
        })
}

// Delete a elpiji with specified elpiji id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Elpijidb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Data telah sukses dihapus!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Tidak dapat menghapus data dengan id " + id
            });
        });
}