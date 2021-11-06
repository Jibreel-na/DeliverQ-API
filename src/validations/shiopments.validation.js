const Joi = require('@hapi/joi');

const { normal, driver, admin, company } = require('../config/contant');
const { password, objectId } = require('./custom.validation');

const query = {
  body: Joi.object().keys({
    comments: Joi.string(),
    deliveryDate: Joi.string(),
    weight: Joi.string(),
    status: Joi.number().default(-1),
    paymentStatus: Joi.number().default(-1),
    other: Joi.number(),
    tag: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    user: Joi.string(),
    company: Joi.string(),
    ecommerce: Joi.string(),
  }),
};
const create = {
  body: Joi.object().keys({
    from: Joi.string().custom(objectId).required(),
    to: Joi.string().custom(objectId).required(),
    type: Joi.string().custom(objectId),//.required(),
    status: Joi.number().default(0),
    cost: Joi.number().default(0).required(),
    weight: Joi.string().allow(''),
    deliveryDate: Joi.date().default(new Date().toISOString()),
  }),
};



const otpSend = {
  body: Joi.object().keys({
    phone: Joi.string().required(),
  }),
};

const createGuest = {
  body: Joi.object().keys({

    otp: Joi.string().required(),

    shipment: Joi.object().keys({
      type: Joi.string().custom(objectId).required(),
      category: Joi.string().custom(objectId).required(),
      status: Joi.number().default(0),
      paymentStatus: Joi.number().default(0),
      cost: Joi.number().default(0).required(),
      weight: Joi.string().allow(''),
      deliveryDate: Joi.date().default(new Date().toISOString()),
      phone: Joi.string().allow(''),
      duration: Joi.string().allow(''),  
      productPayment: Joi.string().required(),  
      productPaymentAmount: Joi.string().default(0),  
      deliveryPayment: Joi.string().required(),  
    }).required(),



    user: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      // login_with: Joi.string().default('Auth'),
      // password: Joi.string().custom(password).default('a12345678'),
      // role: Joi.any().valid(normal, driver, admin, company).default(normal),
      // fcm: Joi.string().default([]),
      email: Joi.string().allow(''),
      phone: Joi.string().required(),
      // active: Joi.when('role', { is: company, then: Joi.string().default(0), otherwise: Joi.string().default(0) }),
      // company: Joi.when('role', { is: driver, then: Joi.string().custom(objectId), otherwise: Joi.string().custom(objectId) }),
      // city: Joi.when('role', { is: company, then: Joi.string().custom(objectId), otherwise: Joi.string() }),
      // lat: Joi.when('role', { is: company, then: Joi.any(), otherwise: Joi.any().default('') }),
      // lng: Joi.when('role', { is: company, then: Joi.any(), otherwise: Joi.any().default('') }),
      // locationText: Joi.when('role', { is: company, then: Joi.string(), otherwise: Joi.string().default('') }),
      // categories: Joi.when('role', { is: company, then: Joi.array().items(Joi.string().custom(objectId)).min(0), otherwise: Joi.array().items(Joi.string().custom(objectId)).default([]).min(0) }),
    }).required(),

    from: Joi.object().keys({
      phone: Joi.string().required(),
      name: Joi.string().default('').allow(''),
      address: Joi.string().required(),
      city: Joi.any(), // .required(),
      landmark: Joi.string().allow('').default(''),
      time: Joi.string().required(),
      date: Joi.date().required(),
      locationText: Joi.string().required(),
      type: Joi.any().required(),
      lat: Joi.any().required(),
      lng: Joi.any().required(), 
    }).required(),

    to: Joi.object().keys({
      phone: Joi.string().required(),
      name: Joi.string().default('').allow(''),
      address: Joi.string().required(),
      city: Joi.any(), // .required(),
      landmark: Joi.string().allow('').default(''),
      //time: Joi.string().required(),
      //date: Joi.date().required(),
      locationText: Joi.string().required(),
      type: Joi.any().required(),
      lat: Joi.any().required(),
      lng: Joi.any().required(), 
    }).required()

  }),
};




const update = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    type: Joi.string().custom(objectId).required(),
    category: Joi.string().custom(objectId).required(),
    status: Joi.number().default(0),
    paymentStatus: Joi.number().default(0),
    cost: Joi.number().default(0).required(),
    weight: Joi.string().allow(''),
    deliveryDate: Joi.date().default(new Date().toISOString()),
    phone: Joi.string().allow(''),
    duration: Joi.string().allow(''),  
    productPayment: Joi.string().required(),  
    productPaymentAmount: Joi.string().allow(''),  
    deliveryPayment: Joi.string().required(),  
    deliveryDate: Joi.date().default(new Date().toISOString()),
  })
};



const assignCompany = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    company: Joi.string().custom(objectId).required(),
  })
};

const assignDriver = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    driver: Joi.string().custom(objectId).required(),
  })
};


const acceptOrReject = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    status: Joi.number().required(),
    rejectReason: Joi.when('status', { is: 2, then: Joi.string().allow(''), otherwise: Joi.string().allow('') }),
  })
};

const cancelShipment = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  })
};


const UpdateStatus = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    status: Joi.number().required(),
  })
};



const get = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};
const getTag = {
  params: Joi.object().keys({
    tag: Joi.string().required(),
  }),
};

const delete_shipments = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};


module.exports = {
  query,
  get,
  delete_shipments,
  update,
  create,
  getTag,
  assignDriver,
  assignCompany,
  acceptOrReject,
  UpdateStatus,
  createGuest,
  otpSend,
  cancelShipment
};
