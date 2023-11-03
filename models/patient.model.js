const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: Number,
  medicalHistory: String,
  ward: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;