"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    INSERT INTO posts (user_id, title, content, created_at, updated_at) VALUES
      (1, 'Blog Title 1', 'Blog Content 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 2', 'Blog Content 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 3', 'Blog Content 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 4', 'Blog Content 4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 5', 'Blog Content 5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 6', 'Blog Content 6', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 7', 'Blog Content 7', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 8', 'Blog Content 8', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (1, 'Blog Title 9', 'Blog Content 9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 10', 'Blog Content 10', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 11', 'Blog Content 11', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 12', 'Blog Content 12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 13', 'Blog Content 13', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 14', 'Blog Content 14', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 15', 'Blog Content 15', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 16', 'Blog Content 16', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 17', 'Blog Content 17', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (2, 'Blog Title 18', 'Blog Content 18', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 19', 'Blog Content 19', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 20', 'Blog Content 20', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 21', 'Blog Content 21', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 22', 'Blog Content 22', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 23', 'Blog Content 23', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 24', 'Blog Content 24', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 25', 'Blog Content 25', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 26', 'Blog Content 26', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      (3, 'Blog Title 27', 'Blog Content 27', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DELETE FROM "posts"`);
  },
};
