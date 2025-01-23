const applicationService = require("../services/applicationService");
const dpFunctions = require("../services/dpFunctions");
const { sequelize } = require("../services/dbService");
const User = require("../models/user");

const epsilon = 0.5;

exports.getCountOfApplicationsByType = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetApplication < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetApplication);

    await User.update(
      { budgetApplication: user.budgetApplication - epsilon },
      { where: { id: userId } }
    );

    const sensivity = 1;
    const data = await applicationService.getCountOfApplicationsByType(
      req,
      res
    );
    const finalData = data.map((d) => {
      d.num_applications = dpFunctions.addGeometricNoise(
        d.num_applications,
        sensivity,
        epsilon
      );
      return d;
    });
    res.send(finalData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountOfApplicationsReceivedPerState = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetApplication < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetApplication);

    await User.update(
      { budgetApplication: user.budgetApplication - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data =
      await applicationService.getCountOfApplicationsReceivedPerState(req, res);
    const finalData = data.map((d) => {
      d.num_applications = dpFunctions.addLaplaceNoise(
        d.num_applications,
        sensitivity,
        epsilon
      );
      return d;
    });
    res.send(finalData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProportionOfApplicationsConsummatedVsNot = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetApplication < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetApplication);

    await User.update(
      { budgetApplication: user.budgetApplication - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data =
      await applicationService.getProportionOfApplicationsConsummatedVsNot(
        req,
        res
      );
    const finalData = data.map((d) => {
      d.num_applications = dpFunctions.addGeometricNoise(
        d.num_applications,
        sensitivity,
        epsilon
      );
      return d;
    });
    res.send(finalData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountOfApplicationsReceivedIn2024 = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetApplication < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetApplication);

    await User.update(
      { budgetApplication: user.budgetApplication - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data = await applicationService.getCountOfApplicationsReceivedIn2024(
      req,
      res
    );
    const finalData = data.map((d) => {
      d.num_applications = dpFunctions.addLaplaceNoise(
        d.num_applications,
        sensitivity,
        epsilon
      );
      return d;
    });
    res.send(finalData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
