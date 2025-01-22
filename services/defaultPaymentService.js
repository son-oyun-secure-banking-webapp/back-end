const { sequelize } = require("./dbService");

exports.getCountDefaultersByEducationLevel = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
      SELECT education, COUNT(*) AS num_defaulters
        FROM defaultPayments
        WHERE defaultPaymentNextMonth = 1
        GROUP BY education;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageCreditLimitByMaritalStatus = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
      SELECT marriage, AVG(limitBal) AS avg_limit
FROM defaultPayments
GROUP BY marriage;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getCountOfCustomersWithPaymentDelaysLastSixMonth = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT education, COUNT(*) AS num_delayed_customers
FROM defaultPayments
WHERE pay0 > 0 OR pay2 > 0 OR pay3 > 0 OR pay4 > 0 OR pay5 > 0 OR pay6 > 0
GROUP BY education;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageAgeOfCustomersByDefaultStatus = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT defaultPaymentNextMonth, AVG(age) AS avg_age
FROM defaultPayments
GROUP BY defaultPaymentNextMonth;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getTotalOutstandingBillAmountByMaritalStatus = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT marriage, SUM(billAmt1 + billAmt2 + billAmt3 + billAmt4 + billAmt5 + billAmt6) AS total_outstanding
FROM defaultPayments
GROUP BY marriage;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

exports.getAverageTotalPaymentMadeByEducationLevel = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
SELECT education, AVG(payAmt1 + payAmt2 + payAmt3 + payAmt4 + payAmt5 + payAmt6) AS avg_total_payment
FROM defaultPayments
GROUP BY education;
    `);

    return results;
  } catch (error) {
    console.error("Error executing query:", error);
  }
};
