require('dotenv').config();
const http = require('http');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const config = require('./config');
const mongoConnection = require('./database');

const { port, origin } = config;

const app = express();
// config express app
app.use(cors({ origin, credentials: true }));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Start DB
mongoConnection();
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on http:localhost:${port}`)
})