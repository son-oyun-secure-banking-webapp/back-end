const bankMarketingService = require("../services/bankMarketingService");
const { sequelize } = require("../services/dbService");
const dpFunctions = require("../services/dpFunctions");
const User = require("../models/user");

const epsilon = 0.5;

exports.getCustomersWithHousingLoansByEducationLevel = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetBankMarketing < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetBankMarketing);

    await User.update(
      { budgetBankMarketing: user.budgetBankMarketing - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data =
      await bankMarketingService.getCustomersWithHousingLoansByEducationLevel(
        req,
        res
      );
    const finalData = data.map((d) => {
      d.num_customers = dpFunctions.addLaplaceNoise(
        d.num_customers,
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

exports.getNumberOfCustomersContactedEachMonth = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetBankMarketing < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetBankMarketing);

    await User.update(
      { budgetBankMarketing: user.budgetBankMarketing - epsilon },
      { where: { id: userId } }
    );
    const sensivity = 1;
    const data =
      await bankMarketingService.getNumberOfCustomersContactedEachMonth(
        req,
        res
      );
    const finalData = data.map((d) => {
      d.num_contacts = dpFunctions.addGeometricNoise(
        d.num_contacts,
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

exports.getNumberOfCustomersAcceptedOfferByMaritalStatus = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetBankMarketing < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetBankMarketing);

    await User.update(
      { budgetBankMarketing: user.budgetBankMarketing - epsilon },
      { where: { id: userId } }
    );
    const sensitivity = 1;
    const data =
      await bankMarketingService.getNumberOfCustomersAcceptedOfferByMaritalStatus(
        req,
        res
      );
    const finalData = data.map((d) => {
      d.num_accepted = dpFunctions.addLaplaceNoise(
        d.num_accepted,
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
