const applicationService = require("../services/applicationService");

exports.getCountOfApplicationsByType = async (req, res) => {
  try {
    const data = await applicationService.getCountOfApplicationsByType(
      req,
      res
    );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageTimeBetweenReceivedAndAcceptedByRegion = async (req, res) => {
  try {
    const data =
      await applicationService.getAverageTimeBetweenReceivedAndAcceptedByRegion(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountOfApplicationsReceivedPerState = async (req, res) => {
  try {
    const data =
      await applicationService.getCountOfApplicationsReceivedPerState(req, res);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProportionOfApplicationsConsummatedVsNot = async (req, res) => {
  try {
    const data =
      await applicationService.getProportionOfApplicationsConsummatedVsNot(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountOfApplicationsReceivedIn2024 = async (req, res) => {
  try {
    const data = await applicationService.getCountOfApplicationsReceivedIn2024(
      req,
      res
    );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAverageActionProcessingTimeByApplicationType = async (req, res) => {
  try {
    const data =
      await applicationService.getAverageActionProcessingTimeByApplicationType(
        req,
        res
      );
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
