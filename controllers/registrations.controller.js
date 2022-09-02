const { Op } = require('sequelize');
const { Registration } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll({
      where: { status: { [Op.ne]: 'deleted' } },
    });

    res.status(200).json({
      status: 'success',
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegister = async (req, res) => {
  try {
    const { register } = req;

    res.status(200).json({
      status: 'success',
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistrations = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({ entranceTime });

    res.status(201).json({
      status: 'success',
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegister = async (req, res) => {
  try {
    const { exitTime, status } = req.body;
    const { register } = req;

    await register.update({ exitTime, status });

    res.status(200).json({
      status: 'success',
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegister = async (req, res) => {
  try {
    const { register } = req;

    await register.update({ status: 'deleted' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRegistrations,
  getAllRegistrations,
  getRegister,
  updateRegister,
  deleteRegister,
};
