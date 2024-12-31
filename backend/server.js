const express = require("express");
const path = require("path");
const app = express();


// Route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Enable serving static files from the frontend directory
app.use(express.static(path.join(__dirname, "../frontend")));

// Unconfigured route
app.get("/open-redirect", (req, res) => {
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
