const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    await db.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)',
      [name, email, password, role]
    );
    res.send(' User added successfully!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.put('/:id', async (req, res) => {
  const { name, email, password, role } = req.body;
  const id = req.params.id;
  try {
    await db.query(
      'UPDATE users SET name=$1, email=$2, password=$3, role=$4 WHERE id=$5',
      [name, email, password, role, id]
    );
    res.send('User updated successfully!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM users WHERE id=$1', [id]);
    res.send('User deleted successfully!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
