import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/database';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Database connection and server start
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');

    await sequelize.sync();
    console.log('Database synchronized');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
    process.exit(1);
  }
};

startServer(); 