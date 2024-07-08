const app = require("express").Router();
const { validate } = require("express-validation");
const { AddRole } = require("../validations/role");
const model = require("../models").Role;
const BaseController = require("../controllers/base");
const { ByIdParams, GetBaseController } = require("../validations/common");

const controller = new BaseController(model, "Role");

/**
 * @Route -> Role details, update and delete by ID
 *
 * @model app.role
 * @alias Role's Read/Update/Delete
 *
 * @api {get | put | delete} /role/:id
 * @apiVersion 1.0.0 (/api/v1/)
 */
app
  .route("/:id")
  .get(validate(ByIdParams), controller.get)
  .put(validate(ByIdParams), controller.update)
  .delete(validate(ByIdParams), controller.delete);

/**
 * @Route -> Add Role
 *
 * @model app.role
 * @alias Add Role
 *
 * @api {post} /role/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/").post(validate(AddRole), controller.add);

/**
 * @Route -> List role
 *
 * @model app.role
 * @alias List Role
 *
 * @api {get} /role/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/").get(validate(GetBaseController), controller.list);

module.exports = app;
