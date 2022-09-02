const express = require('express');
const { registrationRouter } = require('./routes/registrations.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/registrations', registrationRouter);

module.exports = { app };
