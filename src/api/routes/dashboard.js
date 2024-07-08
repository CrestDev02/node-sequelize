const app = require("express").Router();
const { LOGGED_IN } = require("../../helpers/constants");
const { Authorize } = require("../../middleware/auth");
const controller = require("../controllers/dashboard");

/**
 * @Route -> Get Infected Person Statatics
 *
 * @model app.covidSurvey
 * @alias `Infected Stats`
 *
 * @api {post} /dashboard/infected/stats
 * @apiVersion 1.0.0 (/api/v1/)
 */
// app
//   .route("/infected/stats")
//   .get(Authorize(LOGGED_IN), controller.infectedStats);

module.exports = app;
