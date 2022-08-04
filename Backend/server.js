const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "This message should go through now." });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// keep errorHander middleware below the route
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
