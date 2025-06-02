import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface OtpAttributes {
  id: number;
  email: string;
  otp: string;
  expiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

class Otp extends Model<OtpAttributes> implements OtpAttributes {
  public id!: number;
  public email!: string;
  public otp!: string;
  public expiresAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Otp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Otp',
    tableName: 'otps',
  }
);

export default Otp; 