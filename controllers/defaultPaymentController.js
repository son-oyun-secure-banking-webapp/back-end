const defaultPaymentService = require("../services/defaultPaymentService");

exports.getCountDefaultersByEducationLevel = async (req, res) => {
  try {
    const data = await defaultPaymentService.getCountDefaultersByEducationLevel(
      req,
      res
    );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageCreditLimitByMaritalStatus = async (req, res) => {
  try {
    const data =
      await defaultPaymentService.getAverageCreditLimitByMaritalStatus(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountOfCustomersWithPaymentDelaysLastSixMonth = async (req, res) => {
  try {
    const data =
      await defaultPaymentService.getCountOfCustomersWithPaymentDelaysLastSixMonth(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageAgeOfCustomersByDefaultStatus = async (req, res) => {
  try {
    const data =
      await defaultPaymentService.getAverageAgeOfCustomersByDefaultStatus(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTotalOutstandingBillAmountByMaritalStatus = async (req, res) => {
  try {
    const data =
      await defaultPaymentService.getTotalOutstandingBillAmountByMaritalStatus(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageTotalPaymentMadeByEducationLevel = async (req, res) => {
  try {
    const data =
      await defaultPaymentService.getAverageTotalPaymentMadeByEducationLevel(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
