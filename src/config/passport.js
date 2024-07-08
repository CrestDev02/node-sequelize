/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 * (c) 2022 [CrestDev02] @ CrestDev02
 *
 * --------------------------------------------------
 *
 * @module app.v1.passportAuthenticationMiddleware
 * @description Passport Authentication Handler to Authorize the USER before accessing the API's.
 * @author CrestDev02
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const { JWT_SECRET } = require("./envVars");
const User = require("../api/models").User;
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
  secretOrKey: JWT_SECRET,
};

const JWT = async (payload, done) => {
  try {
    User.findByPk(payload.id).then((user) => {
      if (user && user.dataValues) {
        return done(null, user.dataValues);
      }
      return done(null, false);
    });
  } catch (error) {
    return done(err, false);
  }
};

exports.Jwt = new JwtStrategy(JwtOptions, JWT);
