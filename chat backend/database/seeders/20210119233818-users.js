'use strict';

const bcrypt = require ('bcrypt')

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

      await queryInterface.bulkInsert('Users',[
        {
        firstName:'John',
        lastname:'Dario',
        email: 'john.doe@gmail.com',
        password: bcrypt.hashSync('secret',10),
        gender:'male'
        },
        {
          firstName:'Daniel',
          lastname:'Altamirano',
          email: 'daniel.c@gmail.com',
          password:'secret',
          gender:'male'
          },
          {
            firstName:'Sara',
            lastname:'Connor',
            email: 'saraconn@gmail.com',
            password:'secret',
            gender:'female'
            }
      ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
