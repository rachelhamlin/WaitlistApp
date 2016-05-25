var mongoose = require('mongoose');

var partySchema = mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  phoneNumber: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Party', partySchema);
