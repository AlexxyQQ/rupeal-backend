const { DataTypes, Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid"); // Import UUID v4 generator
const sequelize = require("../../../config/db.config"); // Import the Sequelize instance

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First name cannot be null.",
        },
        notEmpty: {
          msg: "First name cannot be empty.",
        },
      },
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Last name cannot be null.",
        },
        notEmpty: {
          msg: "Last name cannot be empty.",
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Username cannot be null.",
        },
        notEmpty: {
          msg: "Username cannot be empty.",
        },
        isAlphanumeric: {
          msg: "Username should contain only letters and numbers.",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Age must be a positive number.",
        },
        max: {
          args: [100],
          msg: "Please enter your real age.",
        },
      },
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["male", "female", "other"]],
          msg: "Gender must be one of: male, female, other.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Email cannot be null.",
        },
        notEmpty: {
          msg: "Email cannot be empty.",
        },
        isEmail: {
          msg: "Invalid email format.",
        },
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: "Phone number must be numeric.",
        },
      },
    },
    profile_picture: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

module.exports = User;
