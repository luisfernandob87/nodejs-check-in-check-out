const express = require('express');
const { registrationRouter } = require('./routes/registrations.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/registrations', registrationRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist in our server`,
  });
});

module.exports = { app };
