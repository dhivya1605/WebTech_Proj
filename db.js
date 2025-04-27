const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       //  PostgreSQL username
  host: 'localhost',      //  DB server
  database: 'ticket_system', // database name
  password: 'dhivya*1605',  //DB password
  port: 5432,             // default PostgreSQL port
});

pool.connect((err) => {
  if (err) {
    console.error(' Error connecting to the database:', err);
  } else {
    console.log('Connected to PostgreSQL database successfully!');
  }
});

module.exports = pool;
