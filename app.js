const express = require("express");
const { sequelize } = require("./services/dbService");
const userController = require("./controllers/userController");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from microservice!" });
});

app.get("/check-user", (req, res) => {
  userController.checkUser(req, res);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

(async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Back-end running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err.message);
    process.exit(1);
  }
})();
