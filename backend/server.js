const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const cors = require('cors');

const connectDB = require('./database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 5000
const HOST = process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0"

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// corse
app.use(cors())


// set view engine
app.set("view engine", "ejs")

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./routes/router'))
app.use('/api/users', require('./routes/router'));

app.listen(PORT, ()=> { console.log(`Server is running on http://${HOST}:${PORT}`)});