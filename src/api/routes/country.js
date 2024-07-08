const app = require("express").Router();
const { validate } = require("express-validation");
const { AddCountry } = require("../validations/country");
const model = require("../models").Country;
const BaseController = require("../controllers/base");
const { Authorize } = require("../../middleware/auth");
const { ADMIN, LOGGED_IN } = require("../../helpers/constants");
const { ByIdParams, GetBaseController } = require("../validations/common");

const controller = new BaseController(model, "Country");

/**
 * @Route -> Country details, update and delete by ID
 *
 * @model app.country
 * @alias Country's Read/Update/Delete
 *
 * @api {get | put | delete} /country/:id
 * @apiVersion 1.0.0 (/api/v1/)
 */
app
  .route("/:id")
  .get(validate(ByIdParams), controller.get)
  .put(Authorize(LOGGED_IN), validate(ByIdParams), controller.update)
  .delete(Authorize(LOGGED_IN), validate(ByIdParams), controller.delete);

/**
 * @Route -> Add a country
 *
 * @model app.country
 * @alias Add Country
 *
 * @api {post} /country/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/").post(Authorize(ADMIN), validate(AddCountry), controller.add);

/**
 * @Route -> List country
 *
 * @model app.country
 * @alias List Country
 *
 * @api {get} /country/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app
  .route("/")
  .get(Authorize(LOGGED_IN), validate(GetBaseController), controller.list);

module.exports = app;
