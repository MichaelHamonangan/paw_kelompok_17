const mongoose = require('mongoose');

/**
 * @description Connect ke database MongoDB
 * @param {string} process.env.MONGO_URI
 * @returns {object} mongoose.connection
 */
const connectDB = async () => {
    try{
        // connect ke mongodb dengan mongodb connection string dari .env file
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB