const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
  db.query('SELECT * FROM ticket_assignments', (err, result) => {
    if (err) res.status(500).send(err.message);
    else res.json(result.rows);
  });
});

router.post('/', (req, res) => {
  const { ticket_id, agent_id } = req.body;
  db.query(
    'INSERT INTO ticket_assignments (ticket_id, agent_id) VALUES ($1, $2)',
    [ticket_id, agent_id],
    (err) => {
      if (err) res.status(500).send(err.message);
      else res.status(201).send('Ticket assigned successfully');
    }
  );
});

module.exports = router;
