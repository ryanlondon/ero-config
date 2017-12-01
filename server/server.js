const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const roomController = require('./room/roomController');

const app = express();

mongoose.connect('mongodb://localhost/ero-config');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'./../'));

app.get('/api/rooms', (req, res) => {
  roomController.getAllRooms((err, rooms) => {
    res.status(200).json(rooms);
  });
});

app.post('/api/rooms', 
  roomController.addRoom,
  (req, res) => {
    res.status(200).json(res.locals.room);
});

app.listen(3000);