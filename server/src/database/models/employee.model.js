const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
    trim: true,
  },

  empId: {
    type: String,
    required: true,
    trim: true,
  },

  jobTitle: {
    type: String,
    required: true,
    trim: true,
  },

  dept: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  timestamps: true,
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel;
