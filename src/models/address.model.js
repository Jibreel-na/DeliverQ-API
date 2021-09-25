const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const Schema = mongoose.Schema(
  {
    city: {
      type: mongoose.Schema.ObjectId,
      ref: 'City',
      required: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    type: {
      type: Number,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
    locationText: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: false,
    },
    createdAt: {
      default: Date.now,
      type: Date,
    },
  }
);





Schema.plugin(toJSON);
Schema.plugin(paginate);



const Country = mongoose.model('address', Schema);

module.exports = Country;
