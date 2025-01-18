const User = require("../models/user");

exports.checkUser = async (username, password) => {
  const user = await User.findOne({ where: { username, password } });

  if (user) {
    return user;
  }

  return null;
};
