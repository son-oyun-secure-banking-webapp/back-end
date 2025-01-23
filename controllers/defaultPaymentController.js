const defaultPaymentService = require("../services/defaultPaymentService");
const { sequelize } = require("../services/dbService");
const User = require("../models/user");
const dpFunctions = require("../services/dpFunctions");

const epsilon = 0.5;

exports.getCountDefaultersByEducationLevel = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetDefaultPayment < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetDefaultPayment);

    await User.update(
      { budgetDefaultPayment: user.budgetDefaultPayment - epsilon },
      { where: { id: userId } }
    );
    const sensitivity = 1;
    const data = await defaultPaymentService.getCountDefaultersByEducationLevel(
      req,
      res
    );
    const finalData = data.map((d) => {
      d.num_defaulters = dpFunctions.addLaplaceNoise(
        d.num_defaulters,
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

exports.getCountOfCustomersWithPaymentDelaysLastSixMonth = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetDefaultPayment < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetDefaultPayment);

    await User.update(
      { budgetDefaultPayment: user.budgetDefaultPayment - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data =
      await defaultPaymentService.getCountOfCustomersWithPaymentDelaysLastSixMonth(
        req,
        res
      );
    const finalData = data.map((d) => {
      d.num_delayed_customers = dpFunctions.addGeometricNoise(
        d.num_delayed_customers,
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

exports.getCountOfCustomersByGender = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetDefaultPayment < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetDefaultPayment);

    await User.update(
      { budgetDefaultPayment: user.budgetDefaultPayment - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data = await defaultPaymentService.getCountOfCustomersByGender(
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

exports.getCountOfCustomersByAgeGroup = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.budgetDefaultPayment < 0.5) {
      return res.status(400).json({ error: "Not enough budget" });
    }

    console.log(user.budgetDefaultPayment);

    await User.update(
      { budgetDefaultPayment: user.budgetDefaultPayment - epsilon },
      { where: { id: userId } }
    );

    const sensitivity = 1;
    const data = await defaultPaymentService.getCountOfCustomersByAgeGroup(
      req,
      res
    );
    const finalData = data.map((d) => {
      d.num_customers = dpFunctions.addGeometricNoise(
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
