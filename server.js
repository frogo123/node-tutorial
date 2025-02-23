const express = require("express"); // Import Express
const app = express(); // Create Express app

const port = 3000; // Define port

// Home Route
app.get("/", (req, res) => {
  res.send("🍽️ Welcome to Eddie's Express Restaurant! 🚀");
});

// Menu Route
app.get("/menu", (req, res) => {
  res.json({ dish: "Pizza", price: "$10" }); // Sends JSON response
});

// About Route
app.get("/about", (req, res) => {
  res.send("👨‍🍳 This is Eddie’s Express restaurant, where we serve the best code!");
});

// Handle 404 (Unknown Routes)
app.use((req, res) => {
  res.status(404).send("❌ Sorry, this page doesn't exist.");
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
