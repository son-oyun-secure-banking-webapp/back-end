const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/dbService");

const BankMarketing = sequelize.define(
  "BankMarketing",
  {
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    education: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    default: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    housing: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    loan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    campaign: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pdays: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    previous: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    poutcome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    y: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "bankMarketings",
    timestamps: true,
  }
);

module.exports = BankMarketing;
