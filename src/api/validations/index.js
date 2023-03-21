const Joi = require("joi");
const { object, string, number } = require("yup");
const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
});

module.exports = {
  productSchema,
  inputRequire: (data) => {
    return productSchema.validate(data, { abortEarly: false });
  },
};
