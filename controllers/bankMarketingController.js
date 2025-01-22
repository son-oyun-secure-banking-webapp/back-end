const bankMarketingService = require("../services/bankMarketingService");

exports.getCustomersWithHousingLoansByEducationLevel = async (req, res) => {
  try {
    const data =
      await bankMarketingService.getCustomersWithHousingLoansByEducationLevel(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageBalanceOfCustomersByMaritalStatus = async (req, res) => {
  try {
    const data =
      await bankMarketingService.getAverageBalanceOfCustomersByMaritalStatus(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getNumberOfCustomersContactedEachMonth = async (req, res) => {
  try {
    const data =
      await bankMarketingService.getNumberOfCustomersContactedEachMonth(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageCampaignDurationByEducationLevel = async (req, res) => {
  try {
    const data =
      await bankMarketingService.getAverageCampaignDurationByEducationLevel(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getNumberOfCustomersAcceptedOfferByMaritalStatus = async (req, res) => {
  try {
    const data =
      await bankMarketingService.getNumberOfCustomersAcceptedOfferByMaritalStatus(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
