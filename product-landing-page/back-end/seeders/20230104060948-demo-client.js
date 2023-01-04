'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [{
      id: 1,
      name: 'John',
      email: 'example@example.com',
      product: 'begginer',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
