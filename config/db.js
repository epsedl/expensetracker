const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'b1wim3sym5dlhogzv3u7-mysql.services.clever-cloud.com',
    user: process.env.DB_USER || 'uhn5uoqvwjdlnqac',
    password: process.env.DB_PASSWORD || 'UMpR3WsdEjiYrJUzPwwR',
    database: process.env.DB_NAME || 'b1wim3sym5dlhogzv3u7',
    port: process.env.DB_PORT || 3306
});

module.exports = db;
