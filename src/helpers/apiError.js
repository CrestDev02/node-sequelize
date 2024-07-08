/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 * (c) 2022 [CrestDev02] @ CrestDev02
 *
 * --------------------------------------------------
 *
 * @module app.v1.apiErrorGenerator
 * @description Generate API error's for various failed cases with proper error messages and error stacks.
 * @author CrestDev02
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const { INTERNAL_SERVER_ERROR } = require("./constants");

// API Error Response Structure
class APIError extends Error {
  constructor(message, errors = [], statusCode = INTERNAL_SERVER_ERROR) {
    super(message);
    this.message = message;
    this.errors = errors;
    this.status = statusCode;
  }
}

module.exports = APIError;
