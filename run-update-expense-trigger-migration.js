const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const path = require('path');

async function runMigration() {
    const connection = await mysql.createConnection({
        host: 'b1wim3sym5dlhogzv3u7-mysql.services.clever-cloud.com',
        user: 'uhn5uoqvwjdlnqac',
        password: 'UMpR3WsdEjiYrJUzPwwR',
        database: 'b1wim3sym5dlhogzv3u7',
        port: 3306,
        multipleStatements: true
    });

    try {
        console.log('Running expense trigger update migration...');
        
        // Read and execute the SQL file
        const sqlPath = path.join(__dirname, 'migrations', '20240110_update_expense_trigger.sql');
        const sqlContent = await fs.readFile(sqlPath, 'utf8');
        
        await connection.query(sqlContent);
        
        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Error running migration:', error);
        throw error;
    } finally {
        await connection.end();
    }
}

runMigration().catch(console.error);
