const { Date } = require('mongoose');
const mongoose = require('mongoose');

/**
 * @description Mongoose schema
 * @return mongoose.Schema
 * @example this is an example to use the schema for mongoose model:
 * const LPG = mongoose.model('database_model_name', schema)
 */
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

/** 
 * @description Mongoose model with name 'userdb' and schema 'schema'
 * 
 */ 
const Elpijidb = mongoose.model('userdb', schema);

module.exports = Elpijidb;