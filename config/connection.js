const Sequelize = require("sequelize");
require("dotenv").config()

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USERS_NAME, process.env.PASSWORD_NAME, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  // You can add additional options here if needed
});

module.exports = sequelize;
