"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        foreignKey: true,
        references: {
          model: "users",
          key: "id",
          as: "group_id",
        },
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      content: {
        type: Sequelize.STRING,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
  },
};
