'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'fitrul',
      password: '123',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'bastian',
      password: '456',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};