import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; // Import your Sequelize instance

class User extends Model {
  static associate(models: Model) {
    // Define associations here, if needed
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_image: {
      type: DataTypes.STRING,
    },
    total_orders: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    last_logged_in: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    sequelize, // Assign your Sequelize instance here
    modelName: 'User',
  }
);

export default User;
