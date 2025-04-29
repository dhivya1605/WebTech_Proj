const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const { ticket_id, sender_id, content } = req.body;
  db.query('INSERT INTO messages (ticket_id, sender_id, content) VALUES ($1, $2, $3)',
    [ticket_id, sender_id, content],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send('Message added successfully');
      }
    });
});


router.get('/', (req, res) => {
  db.query('SELECT * FROM messages', (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(result.rows);
    }
  });
});

module.exports = router;
