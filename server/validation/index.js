const joi = require("joi");

const productValidation = (data) => {
  const schemaValidation = joi.object({
    title: joi.string().required().max(256),
    price: joi.number().required(),
    story: joi.string().required(),
    label: joi.string(),
  });
  return schemaValidation.validate(data);
};

const registerValidation = (data) => {
  const schemaValidation = joi.object({
    first_name: joi.string().required().max(256),
    last_name: joi.string().required().max(256),
    phone: joi.string().required(),
    email: joi.string().email().required(),
    address: joi.string().required(),
    password: joi.string().required().min(8),
  });
  return schemaValidation.validate(data);
};

module.exports = { productValidation, registerValidation };
