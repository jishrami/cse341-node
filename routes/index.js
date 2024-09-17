// Import Express
const express = require('express');

//Create a router instance
const router = express.Router();

//Import Controllers
const indexController = require('../controllers/index');

// Define a route handler for the root path ('/')
router.get('/', (req, res) => {
    res.send(indexController.simpleReturn());
});

// Export the router
module.exports = router;