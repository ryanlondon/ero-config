const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true, unique: true },
  sources: [{ type: Schema.Types.ObjectId, ref: 'Source' }],
  devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }]
});

const sourceSchema = new Schema({
  name: { type: String, required: true, unique: false },
});

const deviceSchema = new Schema({
  name: { type: String, required: true, unique: false },
});

module.exports = {
  Room: mongoose.model('Room', roomSchema),
  Source: mongoose.model('Source', sourceSchema),
  Device: mongoose.model('Device', deviceSchema),
};