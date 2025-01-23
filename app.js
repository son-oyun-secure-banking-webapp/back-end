const express = require("express");
const cors = require("cors");
const { sequelize } = require("./services/dbService");
const userController = require("./controllers/userController");
const bankMarketingController = require("./controllers/bankMarketingController");
const defaultPaymentController = require("./controllers/defaultPaymentController");
const applicationController = require("./controllers/applicationController");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/check-user", (req, res) => {
  userController.checkUser(req, res);
});

// bank marketing

app.get(
  "/get-number-of-customers-with-housing-loans-by-education-level",
  bankMarketingController.getCustomersWithHousingLoansByEducationLevel
);

app.get(
  "/get-number-of-customers-contacted-each-month",
  bankMarketingController.getNumberOfCustomersContactedEachMonth
);

app.get(
  "/get-number-of-customers-accepted-offer-by-marital-status",
  bankMarketingController.getNumberOfCustomersAcceptedOfferByMaritalStatus
);

// default payment dataset

app.get(
  "/get-count-defaulters-by-education-level",
  defaultPaymentController.getCountDefaultersByEducationLevel
);

app.get(
  "/get-count-of-customers-with-payment-delays-last-six-month",
  defaultPaymentController.getCountOfCustomersWithPaymentDelaysLastSixMonth
);

app.get(
  "/get-count-of-customers-by-gender",
  defaultPaymentController.getCountOfCustomersByGender
);

app.get(
  "/get-count-of-customers-by-age-group",
  defaultPaymentController.getCountOfCustomersByAgeGroup
);

// Application Dataset Queries

app.get(
  "/get-count-of-applications-by-type",
  applicationController.getCountOfApplicationsByType
);

app.get(
  "/get-count-of-applications-received-per-state",
  applicationController.getCountOfApplicationsReceivedPerState
);

app.get(
  "/get-proportion-of-applications-consummated-vs-not",
  applicationController.getProportionOfApplicationsConsummatedVsNot
);

app.get(
  "/get-count-of-applications-received-in-2024",
  applicationController.getCountOfApplicationsReceivedIn2024
);

// budgets

app.get(
  "/get-user-budget-default-payment",
  userController.getUserBudgetDefaultPayment
);

app.get(
  "/get-user-budget-application",
  userController.getUserBudgetApplication
);

app.get(
  "/get-user-budget-bank-marketing",
  userController.getUserBudgetBankMarketing
);

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
