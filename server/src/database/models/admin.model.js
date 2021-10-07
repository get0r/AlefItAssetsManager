const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
    trim: true,
  },

  username: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  timestamps: true,
});

const AdminModel = mongoose.model('admin', adminSchema);

module.exports = AdminModel;
