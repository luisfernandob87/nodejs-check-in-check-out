const express = require('express');
const registrationRouter = express.Router();

const {
  createRegistrations,
  getAllRegistrations,
  getRegister,
  updateRegister,
  deleteRegister,
} = require('../controllers/registrations.controller');

const { registerExist } = require('../middlewares/registrations.middlewares');

registrationRouter.get('/', getAllRegistrations);

registrationRouter.get('/:id', registerExist, getRegister);

registrationRouter.post('/', createRegistrations);

registrationRouter.patch('/:id', registerExist, updateRegister);

registrationRouter.delete('/:id', registerExist, deleteRegister);

module.exports = { registrationRouter };
