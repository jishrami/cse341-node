// Import express
const express = require('express');
const app = express();

// Import Routes
const indexRoutes = require('./routes/index');

// Use the routes
app.use('/', indexRoutes);

// Set the app to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
