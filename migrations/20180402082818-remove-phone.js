'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.removeColumn('Users', 'phone')
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
