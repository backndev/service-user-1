'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
       {
         name: "ramses",
         profession: "Admin Micro",
         role: "admin",
         email: "ramseshutasoit77@gmail.com",
         password: await bcrypt.hash('rahasia123', 10),
         created_at: new Date(),
         updated_at: new Date()
       },
       {
        name: "hutasoit",
        profession: "Front End developer",
        role: "student",
        email: "hutasoit77@gmail.com",
        password: await bcrypt.hash('rahasia11', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
     ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
