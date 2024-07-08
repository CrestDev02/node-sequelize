const { Model } = require("sequelize");

// Extending Model and calling init(attributes, options)
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    // Class instances Method

    // static associate(models) {
    //   // define association here
    //   Country.hasMany(models.CovidSurvey, {
    //     foreignKey: "countryId",
    //     sourceKey: "id",
    //   });
    // }
    // General Searchables used in generic API
    searchable() {
      return ["name", "nicename", "id"];
    }

    // Fields to be remove from response
    removeExtras() {
      return [];
    }
  }

  Country.init(
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
      iso: {
        type: DataTypes.STRING(2),
      },
      nicename: {
        type: DataTypes.STRING,
      },
      iso3: {
        type: DataTypes.STRING(3),
      },
      numcode: {
        type: DataTypes.INTEGER,
      },
      phonecode: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      // Other model options go here
      sequelize,
      modelName: "Country",
      tableName: "country",
    }
  );
  return Country;
};

// module.exports = Country;
