const { sequelize } = require("./dbService");

exports.getCustomersWithHousingLoansByEducationLevel = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT education, COUNT(*) AS num_customers
FROM bankMarketings
WHERE housing = 'yes'
GROUP BY education;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageBalanceOfCustomersByMaritalStatus = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT marital, AVG(balance) AS avg_balance
FROM bankMarketings
GROUP BY marital;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getNumberOfCustomersContactedEachMonth = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT month, COUNT(*) AS num_contacts
FROM bankMarketings
GROUP BY month;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageCampaignDurationByEducationLevel = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT education, AVG(duration) AS avg_duration
FROM bankMarketings
GROUP BY education;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getNumberOfCustomersAcceptedOfferByMaritalStatus = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT marital, COUNT(*) AS num_accepted
FROM bankMarketings
WHERE y = 'yes'
GROUP BY marital;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};
