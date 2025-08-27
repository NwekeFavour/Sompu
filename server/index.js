const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
