import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'bharat_rewards_hub',
  process.env.DB_USER || 'your_username',
  process.env.DB_PASSWORD || 'your_password',
  {
    host: process.env.DB_SERVER || 'localhost',
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
      },
    },
    logging: false,
  }
);

export default sequelize; 