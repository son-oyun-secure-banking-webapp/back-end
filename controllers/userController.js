const userService = require("../services/userService");

exports.checkUser = async (req, res) => {
  const { username, password } = req.query;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  const user = await userService.checkUser(username, password);
  if (user) {
    return res.json({ message: "User found", id: user.id });
  }
  return res.status(404).json({ error: "User not found" });
};

exports.getUserBudgetBankMarketing = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  const user = await userService.getUser(userId);
  if (user) {
    return res.json({ budgetBankMarketing: user.budgetBankMarketing });
  }
  return res.status(404).json({ error: "User not found" });
};

exports.getUserBudgetDefaultPayment = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  const user = await userService.getUser(userId);
  if (user) {
    return res.json({ budgetDefaultPayment: user.budgetDefaultPayment });
  }
  return res.status(404).json({ error: "User not found" });
};

exports.getUserBudgetApplication = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  const user = await userService.getUser(userId);
  if (user) {
    return res.json({ budgetApplication: user.budgetApplication });
  }
  return res.status(404).json({ error: "User not found" });
};
