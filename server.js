const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Hardcoded user
const user = {
  username: "admin",
  password: "1234"
};

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    return res.json({
      success: true,
      message: "Login successful!"
    });
  }

  return res.json({
    success: false,
    message: "Invalid credentials"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
