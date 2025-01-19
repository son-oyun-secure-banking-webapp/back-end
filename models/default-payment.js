const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/dbService");

const DefaultPayment = sequelize.define(
  "DefaultPayment",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
      primaryKey: true,
    },
    limitBal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    education: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    marriage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pay0: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pay2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pay3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pay4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pay5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pay6: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billAmt1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billAmt2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billAmt3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billAmt4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billAmt5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billAmt6: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payAmt1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payAmt2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payAmt3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payAmt4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payAmt5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payAmt6: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    defaultPaymentNextMonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "defaultPayments",
    timestamps: true,
  }
);

module.exports = DefaultPayment;
