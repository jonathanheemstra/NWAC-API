'use strict';

// require in packages
const express = require('express');
const debug = require('debug')('NWAC:server');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// load env vars
dotenv.load();

// set the port and initialize express
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(cors());
let production = process.env.NODE_ENV === 'production';
let morganFormat = production ? 'common' : 'dev';
app.use(morgan(morganFormat));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// run the server
app.listen(PORT, () => {
  debug(`Server up: ${PORT}`);
});
