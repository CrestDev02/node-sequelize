/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 * (c) 2022 [CrestDev02] @ CrestDev02
 *
 * --------------------------------------------------
 *
 * @module app.v1.permissionMiddleware
 * @description Middleware used check wether user is allowed to perform operation or not.
 * @author CrestDev02
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const RolePermission = require("../models").RolePermission;
const Permission = require("../models").Permission;

class Permissions {
  constructor() {}

  checkPermission(role, perName) {
    return new Promise((resolve, reject) => {
      Permission.findOne({ where: { per_name: perName } })
        .then((perm) => {
          RolePermission.findOne({
            where: {
              role_id: role,
              perm_id: perm.id,
            },
          })
            .then((rolePermission) => {
              if (rolePermission) {
                resolve(rolePermission);
              } else {
                reject({ message: "Forbidden" });
              }
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch(() => {
          reject({ message: "Forbidden" });
        });
    });
  }
}

module.exports = Permissions;
