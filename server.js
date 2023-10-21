const express = require('express');
const app = express();

// Create a random code generator function
function generateRandomCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// Serve static files (HTML, CSS, and JavaScript)
app.use(express.static('public'));

// Generate a random code and return it as JSON
app.get('/generate-code', (req, res) => {
  const code = generateRandomCode();
  res.json({ code });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
