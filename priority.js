const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all priorities
router.get('/', (req, res) => {
  db.query('SELECT * FROM priority', (err, result) => {
    if (err) res.status(500).send(err.message);
    else res.json(result.rows);
  });
});

// Add new priority
router.post('/', (req, res) => {
  const { level } = req.body;
  db.query('INSERT INTO priority (level) VALUES ($1)', [level], (err) => {
    if (err) res.status(500).send(err.message);
    else res.status(201).send('Priority added successfully');
  });
});

module.exports = router;
