const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  eroId: {type: Number, required: true, unique: true},
  name: {type: String, required: true, unique: true},
  icon: {type: String, required: false},
  sources: [],
  devices: []
});

module.exports = mongoose.model('Room', roomSchema);