const fs = require('fs');
const path = require('path');
var builder = require('xmlbuilder');

const model = require('./model');
const Room = model.Room;
const Source = model.Source;
const Device = model.Device;

const xmlController = {};

xmlController.extractDB = (req, res, next) => {
  res.locals.rooms = [];
  res.locals.sources = [];
  res.locals.devices = [];

  Room.find({}, (err, rooms) => {
    rooms.forEach((room, i) => {
      res.locals.rooms.push({ id: i + 1, name: room.name });
    });
    Source.find({}, (err, sources) => {
      sources.forEach((source, i) => {
        res.locals.sources.push({ id: i + 1, name: source.name });
      });
      Device.find({}, (err, devices) => {
        devices.forEach((device, i) => {
          res.locals.devices.push({ id: i + 1, name: device.name });
        });
        next();
      });
    });
  });
};

xmlController.saveXML = (req, res, next) => {
  const xml = builder.create('program');
  const rooms = xml.ele('rooms');
  const sources = xml.ele('sources');
  const devices = xml.ele('devices');

  res.locals.rooms.forEach((room, i) => {
    const item = rooms.ele('room', room);
    item.att('id', i + 1);
  });

  res.locals.sources.forEach((source, i) => {
    const item = sources.ele('source', source);
    item.att('id', i + 1);
  });

  res.locals.devices.forEach((device, i) => {
    const item = devices.ele('device', device);
    item.att('id', i + 1);
  });
  
  fs.writeFileSync(path.join(__dirname, '/xml_data/program.xml'), xml.end({ pretty: true }));
  next();
};

module.exports = xmlController;