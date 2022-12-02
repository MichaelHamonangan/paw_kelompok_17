const Elpijidb = require('../model/model');

/**
 * @description Retrieve dan return semua lpg/ retrive dan return sebuah elpiji
 * @param {*} req 
 * @param {*} res 
 * @param req.query.id (optional)
 */
exports.get = (req, res)=>{

    Elpijidb.find()
        .then(elpiji => {
            var sumTabungTunai = 0
            var sumTabungTransfer = 0
            var sumBayarTunai = 0
            var sumBayarTransfer = 0
            elpiji.forEach(value => {
                sumTabungTunai += value.tabung_tunai
                sumTabungTransfer += value.tabung_transfer
                sumBayarTunai += value.bayar_tunai
                sumBayarTransfer += value.bayar_transfer
            });
            res.status(200).send({
                "sumTabungTunai": sumTabungTunai, 
                "sumTabungTransfer": sumTabungTransfer, 
                "sumBayarTunai": sumBayarTunai, 
                "sumBayarTransfer": sumBayarTransfer
            })
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error terjadi dalam mendapatkan informasi" })
        })

}
