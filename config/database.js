const Sequelize = new require('Sequelize')
module.exports = new Sequelize(
  process.env.DB_NAME || 'codegig',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'postgres',
    operationsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)
