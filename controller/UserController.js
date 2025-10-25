const schema = require("../Modules/User");
exports.addUser = async (req, res) => {
  try {
    const newUser = new schema(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
};
