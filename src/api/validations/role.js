const Joi = require("joi");

module.exports = {
  /**
   * @model app.role
   * @alias Add Role Validation's
   *
   * @api {post} /role/
   * @apiVersion 1.0.0 (/api/v1/)
   */
  AddRole: {
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
};
