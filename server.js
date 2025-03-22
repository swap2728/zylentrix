const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const acl = require("./src/config/acl");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.acl = acl;
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
