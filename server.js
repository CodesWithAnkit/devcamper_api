const express = require('express');
const dotenv = require('dotenv');

// route file
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Moutes Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running into ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// 'npm run dev' for start the server
