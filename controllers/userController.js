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
