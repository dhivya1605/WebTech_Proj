const express = require('express');
const router = express.Router();
const db = require('../db');

// POST route to add a new ticket
router.post('/', (req, res) => {
  const { customer_id, agent_id, priority, status } = req.body;
  
  db.query(
    'INSERT INTO tickets (customer_id, agent_id, priority, status) VALUES ($1, $2, $3, $4)',
    [customer_id, agent_id, priority, status],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send('Ticket created successfully');
      }
    }
  );
});
router.get('/', (req, res) => {
  db.query('SELECT * FROM tickets', (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(result.rows);
    }
  });
});
router.put('/:ticket_id', (req, res) => {
  const { ticket_id } = req.params;
  const { priority, status } = req.body;

  db.query(
    'UPDATE tickets SET priority = $1, status = $2, updated_at = CURRENT_TIMESTAMP WHERE ticket_id = $3',
    [priority, status, ticket_id],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send('Ticket updated successfully');
      }
    }
  );
});
router.delete('/:ticket_id', (req, res) => {
  const { ticket_id } = req.params;

  db.query(
    'DELETE FROM tickets WHERE ticket_id = $1',
    [ticket_id],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send('Ticket deleted successfully');
      }
    }
  );
});


module.exports = router;
