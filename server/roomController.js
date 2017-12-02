const model = require('./model');
const Room = model.Room;
const Source = model.Source;
const Device = model.Device;

const roomController = {};

roomController.getAllRooms = (next) => {
  Room.find({})
    .populate('sources', ['name'])
    .populate('devices', ['name'])
    .exec(next);
};

roomController.addRoom = (req, res, next) => {
  const newRoom = new Room({ 
    name: req.body.name,
  });
  newRoom.save((err, newRoom) => {
    if (err) return console.error('Error saving room:', err);
    res.locals.room = newRoom;
    next();
  }); 
};

roomController.deleteRoom = (req, res, next) => {
  Room.find({ name: req.param('name') })
    .remove((err) => {
      if (err) console.error('Error removing room:', err);
      next();
    });
};

roomController.getItem = (req, res, next) => {
  if (req.body.type === 'sources') {
    Source.findOne({ name: req.body.itemName }, (err, source) => {
      if (err) console.error('Error finding source to subcribe to:', err);
      res.locals.item = source;
      next();
    });
  } else if (req.body.type === 'devices') {
    Device.findOne({ name: req.body.itemName }, (err, device) => {
      if (err) console.error('Error finding device to subcribe to:', err);
      res.locals.item = device;
      next();
    });
  }
};

roomController.subscribeToItem = (req, res, next) => {
  Room.findOne({ name: req.body.roomName }, (err, room) => {
    if (err) console.error('Error finding room during subscribe:', err);
    room[req.body.type].push(res.locals.item);
    room.save(next);
  });
};

roomController.unsubscribeFromItem = (req, res, next) => {
  Room.findOne({ name: req.body.roomName }, (err, room) => {
    if (err) console.error('Error finding room during unsubscribe:', err);
    room[req.body.type].pull(res.locals.item);
    room.save(next);
  });
};

module.exports = roomController;