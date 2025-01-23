const User = require("../models/user");

exports.checkUser = async (username, password) => {
  const user = await User.findOne({ where: { username, password } });

  if (user) {
    return user;
  }

  return null;
};

exports.getUser = async (userId) => {
  const user = await User.findByPk(userId);

  if (user) {
    return user;
  }

  return null;
};
