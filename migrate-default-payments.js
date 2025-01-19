const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { sequelize } = require("./services/dbService");
const DefaultPayment = require("./models/default-payment");

const uploadDefaultPayments = async (filePath) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    sheetData = sheetData.slice(1);
    const defaultPayments = sheetData.map((row) => {
      return {
        id: row["__EMPTY"],
        limitBal: row["X1"],
        sex: row["X2"],
        education: row["X3"],
        marriage: row["X4"],
        age: row["X5"],
        pay0: row["X6"],
        pay2: row["X7"],
        pay3: row["X8"],
        pay4: row["X9"],
        pay5: row["X10"],
        pay6: row["X11"],
        billAmt1: row["X12"],
        billAmt2: row["X13"],
        billAmt3: row["X14"],
        billAmt4: row["X15"],
        billAmt5: row["X16"],
        billAmt6: row["X17"],
        payAmt1: row["X18"],
        payAmt2: row["X19"],
        payAmt3: row["X20"],
        payAmt4: row["X21"],
        payAmt5: row["X22"],
        payAmt6: row["X23"],
        defaultPaymentNextMonth: row["Y"],
      };
    });

    await sequelize.sync();
    await DefaultPayment.bulkCreate(defaultPayments);

    console.log("Default payments uploaded successfully!");
  } catch (error) {
    console.error("Error uploading default payments:", error);
  }
};

uploadDefaultPayments("./default_payments.xls");
