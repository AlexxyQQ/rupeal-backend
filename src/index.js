const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("../src/features/auth/routes/auth.route");
const errorHandler = require("../src/middlewares/errorHandler.middleware.js");
require("dotenv").config();
const sequelize = require("./config/db.config.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync all models
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized.");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

app.use("/api/users", userRoutes);

// Use the error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
