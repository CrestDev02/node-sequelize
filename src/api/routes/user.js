const app = require("express").Router();
const { validate } = require("express-validation");
const model = require("../models").User;
const BaseController = require("../controllers/base");
const { ByIdParams, GetBaseController } = require("../validations/common");

const controller = new BaseController(model, "User");

/**
 * @Route -> User details, update and delete by ID
 *
 * @model app.user
 * @alias User's Read/Update/Delete
 *
 * @api {get | put | delete} /user/:id
 * @apiVersion 1.0.0 (/api/v1/)
 */
app
  .route("/:id")
  .get(validate(ByIdParams), controller.get)
  .put(validate(ByIdParams), controller.update)
  .delete(validate(ByIdParams), controller.delete);

/**
 * @Route -> List Users
 *
 * @model app.user
 * @alias List User
 *
 * @api {get} /user/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/").get(validate(GetBaseController), controller.list);

module.exports = app;
