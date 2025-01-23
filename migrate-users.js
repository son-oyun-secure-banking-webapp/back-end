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
      budgetBankMarketing: 5,
      budgetDefaultPayment: 5,
      budgetApplication: 5,
    },
    {
      username: "user",
      name: "User",
      password: "user",
      sex: "male",
      age: 25,
      budgetBankMarketing: 5,
      budgetDefaultPayment: 5,
      budgetApplication: 5,
    },
  ];

  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users);
  } catch (error) {
    console.error("Failed to migrate users:", error.message);
    process.exit(1);
  } finally {
    sequelize.close();
  }
};

uploadUsers();
