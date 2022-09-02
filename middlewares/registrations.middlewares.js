const { Registration } = require('../models/registrations.model');

const registerExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'Registro no existe',
      });
    }
    req.register = register;
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerExist };
