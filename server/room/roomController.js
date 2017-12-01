const Room = require('./roomModel');

const roomController = {};

/**
* getAllRooms
*
* @param next - Callback Function w signature (err, rooms)
*/
roomController.getAllRooms = (next) => {
  Room.find({}, next);
};

roomController.addRoom = (req, res, next) => {
  const newRoom = new Room({ 
    name: req.body.name, 
    eroId: req.body.eroId
  });
  newRoom.save((err, newRoom) => {
    if (err) return console.error('Error saving room:', err);
    res.locals.room = newRoom;
    next();
  }); 
};

module.exports = roomController;