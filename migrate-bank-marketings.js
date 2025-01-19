const Papa = require("papaparse");
const BankMarketing = require("./models/bank-marketing");
const fs = require("fs");
const { sequelize } = require("./services/dbService");

const uploadBankMarketing = async (filePath) => {
  try {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }

      Papa.parse(data, {
        header: true,
        delimiter: ";",
        complete: async (results) => {
          const rows = results.data;

          const rowsAsList = rows.map((row) => ({
            age: row.age == "" ? null : row.age,
            job: row.job,
            marital: row.marital,
            education: row.education,
            default: row.default,
            balance: row.balance,
            housing: row.housing,
            loan: row.loan,
            contact: row.contact,
            day: row.day,
            month: row.month,
            duration: row.duration,
            campaign: row.campaign,
            pdays: row.pdays,
            previous: row.previous,
            poutcome: row.poutcome,
            y: row.y,
          }));

          await sequelize.sync();
          await BankMarketing.bulkCreate(rowsAsList);
          console.log("Bank marketing data uploaded successfully!");
        },
        error: (err) => {
          console.error("Error parsing CSV:", err);
        },
      });
    });
  } catch (error) {
    console.error("Error uploading bank marketing:", error);
  }
};

uploadBankMarketing("./bank-full.csv");
