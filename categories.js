const express = require('express');
const router = express.Router();
const db = require('../db');  // assuming your db connection is in db.js

// POST route for adding category
router.post('/', (req, res) => {
  const { category_id, name } = req.body;
  db.query('INSERT INTO categories (category_id, name) VALUES ($1, $2)',
    [category_id, name],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send('Category added successfully');
      }
    });
});

module.exports = router;
