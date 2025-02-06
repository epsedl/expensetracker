const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Create connection
const connection = mysql.createConnection({
  host: 'b1wim3sym5dlhogzv3u7-mysql.services.clever-cloud.com',
  user: 'uhn5uoqvwjdlnqac',
  password: 'UMpR3WsdEjiYrJUzPwwR',
  database: 'b1wim3sym5dlhogzv3u7',
  port: 3306,
  multipleStatements: true
});

// Read and execute SQL file
const sqlPath = path.join(__dirname, 'migrations', '20240128_trigger.sql');
const sql = fs.readFileSync(sqlPath, 'utf8')
  .replace(/DELIMITER \$\$/g, '')
  .replace(/DELIMITER ;/g, '')
  .replace(/\$\$/g, ';');

// Execute SQL
connection.query(sql, (err) => {
  if (err) {
    console.error('Error executing SQL:', err);
    process.exit(1);
  }
  console.log('Expense history trigger created successfully!');
  connection.end();
});
