const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/dbService");

const Application = sequelize.define(
  "Application",
  {
    applicationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    applicationType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cert: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicantName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supervisoryRegion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    receivedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    acceptedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    actionDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    consummationIndicator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    consummationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "applications",
    timestamps: true,
  }
);

module.exports = Application;
