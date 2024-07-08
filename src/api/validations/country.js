const Joi = require("joi");

module.exports = {
  /**
   * @model app.country
   * @alias Add Country Validation's
   *
   * @api {post} /country/
   * @apiVersion 1.0.0 (/api/v1/)
   */
  AddCountry: {
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
};
