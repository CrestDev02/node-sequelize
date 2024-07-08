"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("user", [
      {
        first_name: "John",
        last_name: "Doe",
        password:
          "$2a$10$XZbho/KJYquLu1D.SrH3Y.DHUf6Nva3ArAmh/LPelws7hCKrfd.Qm", //111111
        email: "whiteshark@crest.com",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("user ", null, {});
  },
};
