const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from microservice!" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Microservice running on http://localhost:${PORT}`);
});
