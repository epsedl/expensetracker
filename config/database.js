const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'b1wim3sym5dlhogzv3u7-mysql.services.clever-cloud.com',
  user: 'uhn5uoqvwjdlnqac',
  password: 'UMpR3WsdEjiYrJUzPwwR',
  database: 'b1wim3sym5dlhogzv3u7',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
