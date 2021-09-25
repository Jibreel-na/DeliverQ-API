const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const createAddress = {
  body: Joi.object().keys({
    city: Joi.string().required(),
    name: Joi.string().required(),

    lat: Joi.string().required(),
    lng: Joi.string().required(),
    locationText: Joi.string().required(),

    address: Joi.string().required(),
    landmark: Joi.string().default('').allow(''),
    dateTime: Joi.date().required(),
    phone: Joi.string().required(),
  })
};

const getAddress = {
  query: Joi.object().keys({
    isPagination: Joi.boolean().default(true),
    keyword: Joi.string(),
    status: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};


const getAddres = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateAddress = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    city: Joi.string().required(),
    name: Joi.string().required(),

    lat: Joi.string().required(),
    lng: Joi.string().required(),
    locationText: Joi.string().required(),

    address: Joi.string().required(),
    landmark: Joi.string().default('').allow(''),
    dateTime: Joi.date().required(),
    phone: Joi.string().required(),
    _id: Joi.string().allow(null),
  })
};

const deleteAddress = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAddress,
  getAddress,
  getAddres,
  updateAddress,
  deleteAddress,
};
