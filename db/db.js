const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'pg123',
  host: 'localhost',
  port: 5432,
  database: 'formalization_exercises'
});

module.exports = pool;
