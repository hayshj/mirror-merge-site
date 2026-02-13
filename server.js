const path = require("path");
const express = require("express");

const app = express();
const PORT = 3003;

// Serve static files in this folder (css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML at /
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/privacy-policy", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'));
});

app.get("/support", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'support.html'));
});

app.listen(PORT, () => {
  console.log(`Privacy policy server running on port ${PORT}`);
});
