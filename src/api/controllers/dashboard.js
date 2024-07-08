const Sequelize = require("sequelize");
const { OK, RECORD_FOUND } = require("../../helpers/constants");
const Op = Sequelize.Op;
const Models = require("../models");

/**
 * @api {post} /user/register
 * @apiDescription Creates a user
 * @apiGroup Auth / User
 *
 * @apiSuccess (200) {Object} data the created user
 * @apiPermission Any
 * @apiVersion 1.0.0 (/api/v1/)
 */
exports.infectedStats = async (req, res, next) => {
  try {
    const infectedCount = await Models.CovidSurvey.count({
      where: { infected: { [Op.eq]: true } },
    });
    const notInfectedCount = await Models.CovidSurvey.count({
      where: { infected: { [Op.eq]: false } },
    });
    return res.status(OK).json({
      data: { infectedCount, notInfectedCount },
      code: OK,
      message: RECORD_FOUND,
    });
  } catch (error) {
    return next(error);
  }
};
