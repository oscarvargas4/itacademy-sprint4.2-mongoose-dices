const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Player = require('../models/Player');

// Endpoints
router.get("/" , (req, res) => {
    res.send("hola");
});

module.exports = router;