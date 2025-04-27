const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all FAQs
router.get('/', (req, res) => {
  db.query('SELECT * FROM faq', (err, result) => {
    if (err) res.status(500).send(err.message);
    else res.json(result.rows);
  });
});

// Add new FAQ
router.post('/', (req, res) => {
  const { question, answer } = req.body;
  db.query(
    'INSERT INTO faq (question, answer) VALUES ($1, $2)',
    [question, answer],
    (err) => {
      if (err) res.status(500).send(err.message);
      else res.status(201).send('FAQ added successfully');
    }
  );
});

module.exports = router;
