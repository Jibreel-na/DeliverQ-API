const mongoose = require('mongoose');
const { toJSON, paginate_shipments } = require('./plugins');


const Schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    company: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false,
    },
    ecommerce: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false,
    },
    driver: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false,
    },
    from: {
      type: mongoose.Schema.ObjectId,
      ref: 'address',
      required: true,
    },
    to: {
      type: mongoose.Schema.ObjectId,
      ref: 'address',
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'categories',
      required: true,
    },
    type: {
      type: mongoose.Schema.ObjectId,
      ref: 'Type',
      required: true,
    },
    cost: {
      type: Number,
      default: 0,
      required: true,
    },
    finalcost: {
      type: Number,
      default: 0,
      required: true,
    },
    tag: {
      type: String,
      default: '',
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    paymentStatus: {
      type: Number,
      default: 0,
    },
    assignedStatus: {
      type: Number,
      default: 0,
    },
    other: {
      type: Number,
      default: 0,
      enum: [0, 1],
      default: 0,
    },
    weight: {
      type: String,
      default: '',
      required: false,
    },
    deliveryDate: {
      type: Date,
      required: false,
    },
    dispatchDate: {
      type: Date,
      required: false,
    },
    pickedhDate: {
      type: Date,
      required: false,
    },
    deliverdDate: {
      type: Date,
      required: false,
    },
    driverAssignDate: {
      type: Date,
      required: false,
    },
    companyAssignDate: {
      type: Date,
      required: false,
    },
    createdAt: {
      default: Date.now,
      type: Date,
    },
    phone: {
      type: String,
      default: 0,
      required: true,
    },
    duration: {
      type: String,
      default: 0,
      required: true,
    },
    productPayment: {
      type: String,
      default: 0,
      required: true,
    },
    productPaymentAmount:{
      type: String,
      default: 0,
      required: false,
    },
    deliveryPayment: {
      type: String,
      default: 0,
      required: true,
    },
    dID: { 
      data: Buffer, 
      contentType: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
Schema.plugin(toJSON);
Schema.plugin(paginate_shipments);
const Post = mongoose.model('Shipments', Schema);

module.exports = Post;
