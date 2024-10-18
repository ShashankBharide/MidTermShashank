// Import necessary modules
const express = require('express');
const path = require('path');

// Create an instance of the Express application
const app = express();

// Serve the index.html file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 3000 or the port assigned by the environment
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
