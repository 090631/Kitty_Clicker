const express = require("express");
const app = express();
const PORT = 3000;
let shouldPlaySound = false;

// Serve static files (HTML, JS, sound)
app.use(express.static("public"));

// Simple endpoint the client polls
app.get("/check-sound", (req, res) => {
  res.json({ play: shouldPlaySound });
  shouldPlaySound = false; // reset after sending
});

app.post("/trigger-sound", (req, res) => {
  shouldPlaySound = true;
  res.send("Sound trigger set!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
