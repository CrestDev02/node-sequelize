/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 * (c) 2022 [CrestDev02] @ CrestDev02
 *
 * --------------------------------------------------
 *
 * @module app.v1.utilsHelper
 * @description Reusable functions which can be used throughout the App.
 * @author CrestDev02
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const APIError = require("./apiError");
const { BAD_REQUEST, DUPLICATE_ERROR } = require("./constants");

exports.checkDuplication = async (data, model) => {
  if (data.name === "SequelizeUniqueConstraintError") {
    const errorObj = { ...data.errors[0] };
    const errors = [
      {
        field: errorObj.path,
        location: model,
        message: `${errorObj.value} is already added in ${model}!`,
      },
    ];
    var arr = new APIError(DUPLICATE_ERROR, errors, BAD_REQUEST);
    return arr;
  }
};

exports.omitter = (keys, obj) => {
  if (!keys.length) return obj;
  const { [keys.pop()]: omitted, ...rest } = obj;
  return this.omitter(keys, rest);
};
