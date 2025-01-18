// scripts/uploadApplications.js
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { sequelize } = require("./services/dbService");
const Application = require("./models/application");

const uploadApplications = async (filePath) => {
  try {
    // Step 1: Read the Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Read the first sheet
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Step 2: Transform data to match the Sequelize model
    const applications = sheetData.map((row) => {
      const excelDateToJSDate = (serialDate) => {
        if (typeof serialDate != "number") {
          return null;
        }
        // Excel's base date is January 1, 1900
        const baseDate = new Date(1900, 0, 1);
        // Add serial date number as days, subtract 1 (Excel has an off-by-one issue)
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

    //console.log(applications[0]);

    // Step 3: Insert data into the database
    await sequelize.sync(); // Ensure table is created
    await Application.bulkCreate(applications);

    console.log("Applications uploaded successfully!");
  } catch (error) {
    console.error("Error uploading applications:", error);
  } finally {
    // Close database connection
    await sequelize.close();
  }
};

// Run the script
const filePath = path.join(__dirname, "./applications.xlsx"); // Path to the Excel file
uploadApplications(filePath);
