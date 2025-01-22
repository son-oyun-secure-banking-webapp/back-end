const { sequelize } = require("./services/dbService");
const User = require("./models/user");

const uploadUsers = async () => {
  const users = [
    {
      username: "admin",
      name: "Admin",
      password: "admin",
      sex: "female",
      age: 30,
    },
    {
      username: "user",
      name: "User",
      password: "user",
      sex: "male",
      age: 25,
    },
  ];

  try {
    await sequelize.sync();
    await User.bulkCreate(users);
  } catch (error) {
    console.error("Failed to migrate users:", error.message);
    process.exit(1);
  } finally {
    sequelize.close();
  }
};

uploadUsers();
