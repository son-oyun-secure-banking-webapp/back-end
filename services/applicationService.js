const { sequelize } = require("./dbService");

exports.getCountOfApplicationsByType = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT applicationType, COUNT(*) AS num_applications
FROM applications
GROUP BY applicationType;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageTimeBetweenReceivedAndAcceptedByRegion = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT supervisoryRegion, AVG(DATEDIFF(acceptedDate, receivedDate)) AS avg_processing_time
FROM applications
GROUP BY supervisoryRegion;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getCountOfApplicationsReceivedPerState = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT state, COUNT(*) AS num_applications
FROM applications
GROUP BY state;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getProportionOfApplicationsConsummatedVsNot = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT consummationIndicator, COUNT(*) AS num_applications
FROM applications
GROUP BY consummationIndicator;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getCountOfApplicationsReceivedIn2024 = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT state, COUNT(*) AS num_applications
FROM applications
WHERE YEAR(receivedDate) = 2024
GROUP BY state;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageActionProcessingTimeByApplicationType = async (req, res) => {
  // double
  try {
    const [results, metadata] = await sequelize.query(`
SELECT applicationType, AVG(DATEDIFF(actionDate, receivedDate)) AS avg_action_time
FROM applications
GROUP BY applicationType;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};
