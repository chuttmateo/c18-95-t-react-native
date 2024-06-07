import * as mysql from 'mysql2/promise';
import * as fs from 'fs';

async function seed() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nestjs',
    port: 3307,
  });

  try {
    const queries = getQueriesFromFile();
    for (const query of queries) {
      await connection.query(query);
    }

    console.log('Datos insertados correctamente');
  } catch (err) {
    console.error('Error al insertar datos', err);
  } finally {
    await connection.end();
  }
}

function getQueriesFromFile() {
  const sql = fs.readFileSync('./src/scripts/seed.sql').toString().trim();
  const queries = sql.split(';').filter((query) => query.trim().length > 0);
  return queries;
}

seed();
