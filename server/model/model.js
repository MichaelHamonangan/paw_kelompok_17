const { Date } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    tanggal : {
        type : Date
    },
    kode : {
        type : String,
        required: true
    },
    nama : {
        type: String,
        required: true
    },
    keterangan : String,
    tabung_transfer : Number,
    tabung_tunai : Number,
    bayar_transfer : Number,
    bayar_tunai : Number,
})

const Elpijidb = mongoose.model('userdb', schema);

module.exports = Elpijidb;