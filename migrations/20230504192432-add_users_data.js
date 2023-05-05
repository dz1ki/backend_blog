"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    INSERT INTO "users" ( first_name, last_name, email, password, created_at, updated_at) VALUES
      ( 'Johni', 'Doel', 'doel123@examples.com', '$2b$05$pwUeB9kGWwlHeEw3J.Re6urIQ9ZqfbZfYFkn6u7og5MYsLf/rIaKm',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ( 'Oliver', 'Williams', 'will24@examples.com', '$2b$05$2Yw.hB9OpNenCA6knyGEue/4k8HeFQwXDj.kEzHGG/ixU4VPVNOZu',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ( 'Gabriel', 'Peters', 'pete78@examples.com', '$2b$05$j6z1uZ8Cp/u9LrB1Ys4uIOsTovH15JC2DnhPn8ktEuX5AQCY7c/Q.',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DELETE FROM "users"`);
  },
};
