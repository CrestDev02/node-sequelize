const { Model } = require("sequelize");

// Extending Model and calling init(attributes, options)
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    // Class instances Method

    // General Searchables used in generic API
    searchable() {
      return ["name"];
    }

    // Fields to be remove from response
    removeExtras() {
      return [];
    }
  }

  Role.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      // Other model options go here
      sequelize,
      modelName: "Role",
      tableName: "role",
    }
  );
  return Role;
};
