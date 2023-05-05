"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("post_images", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      post_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        isNullable: false,
        references: {
          model: "posts",
          key: "id",
          as: "post_id",
        },
      },

      file_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      file: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("post_images");
  },
};
