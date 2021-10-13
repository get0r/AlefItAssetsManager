const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  serviceNo: {
    type: String,
    trim: true,
  },

  brand: {
    type: String,
    trim: true,
  },

  imeiNo: {
    type: String,
    trim: true,
  },

  serialNo: {
    type: String,
    trim: true,
  },

  desc: {
    type: String,
    trim: true,
  },

  model: {
    type: String,
    trim: true,
  },

  price: {
    purchased: Number,
    isRecurring: Boolean,
    monthlyFee: Number,
  },

  accountNo: {
    type: String,
    trim: true,
  },

  package: {
    type: String,
    trim: true,
  },

  isPrePaid: {
    type: Boolean,

  },

  systemModel: {
    type: String,
    trim: true,
  },

  systemSKU: {
    type: String,
    trim: true,
  },

  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'categories',
  },

  isFunctional: {
    type: Boolean,
    default: true,
  },

  taken: {
    isTaken: Boolean,
    takerId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'employees',
    },
  },
},
{
  timestamps: true,
});

const ItemModel = mongoose.model('Item', itemSchema);

module.exports = ItemModel;
