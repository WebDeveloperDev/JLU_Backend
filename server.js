const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'https://your-production-site.com'];

app.use(cors({
  origin: allowedOrigins,   // allow your frontend
  credentials: true         // allow cookies to be sen
}));

app.use(cookieParser());

// Load user routes
app.use("/api/users", require("./routes/userRoutes"));
app.get("/", (req, res) => res.send("Welcome to Innovators API"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
