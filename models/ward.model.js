const mongoose = require('mongoose');

const wardSchema = mongoose.Schema({
  wardNo: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
    enum: ["pediatrics", "surgery", "cardiology", "medicine", "neurology", "general", "emergency"]
  },
}, {
  timestamps: true,
});

const Ward = mongoose.model('ward', wardSchema);

module.exports = Ward;