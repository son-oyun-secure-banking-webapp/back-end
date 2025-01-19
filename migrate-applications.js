const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { sequelize } = require("./services/dbService");
const Application = require("./models/application");

const uploadApplications = async (filePath) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const applications = sheetData.map((row) => {
      const excelDateToJSDate = (serialDate) => {
        if (typeof serialDate != "number") {
          return null;
        }
        const baseDate = new Date(1900, 0, 1);
        return new Date(
          baseDate.getTime() + (serialDate - 2) * 24 * 60 * 60 * 1000
        );
      };
      return {
        applicationNumber: row["Application Number"],
        applicationType: row["Application Type"],
        cert: row["CERT"],
        applicantName: row["Applicant Name"],
        city: row["City"],
        state: row["State"],
        supervisoryRegion: row["Supervisory Region"],
        receivedDate: excelDateToJSDate(row["Received Date"]),
        acceptedDate: excelDateToJSDate(row["Accepted Date"]),
        action: row["Action"],
        actionDate: excelDateToJSDate(row["Action Date"]),
        consummationIndicator: row["Consummation Indicator"] === "Yes",
        consummationDate: excelDateToJSDate(row["Consummation Date"]),
      };
    });

    await sequelize.sync();
    await Application.bulkCreate(applications);

    console.log("Applications uploaded successfully!");
  } catch (error) {
    console.error("Error uploading applications:", error);
  } finally {
    await sequelize.close();
  }
};

const filePath = path.join(__dirname, "./applications.xlsx");
uploadApplications(filePath);
