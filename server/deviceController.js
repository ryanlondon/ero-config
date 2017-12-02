const model = require('./model');
const Device = model.Device;

const deviceController = {};

deviceController.getAllDevices = (next) => {
  Device.find({}, next);
};

deviceController.addDevice = (req, res, next) => {
  const newDevice = new Device({ 
    name: req.body.name,
  });
  newDevice.save((err, newDevice) => {
    if (err) return console.error('Error saving device:', err);
    res.locals.device = newDevice;
    next();
  }); 
};

deviceController.deleteDevice = (req, res, next) => {
  Device.find({ name: req.param('name') })
    .remove((err) => {
      if (err) console.error('Error removing device:', err);
      next();
    });
};

module.exports = deviceController;