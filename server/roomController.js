const model = require('./model');
const Room = model.Room;

const roomController = {};

roomController.getAllRooms = (next) => {
  Room.find({}, next);
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


module.exports = roomController;