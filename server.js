const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const cors = require('cors');

const connectDB = require('./backend/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

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
<<<<<<< Updated upstream:server.js
app.use('/', require('./backend/routes/router'))
=======
app.use('/', require('./routes/router'))
app.use('/api/users', require('./routes/router'));
>>>>>>> Stashed changes:backend/server.js

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});