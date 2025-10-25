require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



mongoose
  .connect("mongodb+srv://rajeshgroot_db_user:mqwvND0uQrpJLSth@testprodb.9sqavom.mongodb.net/?retryWrites=true&w=majority&appName=testprodb", {
    tls: true,
    tlsAllowInvalidCertificates: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => res.send("🚀 Backend running successfully on Vercel!"));

app.post("/add-user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(3001, () => {
  console.log("server running on http://localhost:3001");
});

