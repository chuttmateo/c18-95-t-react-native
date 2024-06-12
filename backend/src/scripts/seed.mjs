import * as mysql from 'mysql2/promise';
import * as fs from 'fs';

async function cleanDatabase(connection) {
  // Add your clean-up queries here.
  // For example, if you want to truncate tables:
  const cleanUpQueries = [
    'SET FOREIGN_KEY_CHECKS = 0;', // Disable foreign key checks
    'TRUNCATE TABLE games;',
    'TRUNCATE TABLE lessons;',
    'TRUNCATE TABLE levels;',
    'TRUNCATE TABLE options;',
    'TRUNCATE TABLE progress;',
    'TRUNCATE TABLE sublessons;',
    'TRUNCATE TABLE user;',
    'SET FOREIGN_KEY_CHECKS = 1;', // Re-enable foreign key checks
  ];

  try {
    for (const query of cleanUpQueries) {
      await connection.query(query);
    }

    console.log('Base de datos limpiada correctamente');
  } catch (err) {
    console.error('Error al limpiar la base de datos', err);
  }
}

async function seed() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nestjs',
    port: 3307,
  });

  try {
    await cleanDatabase(connection); // Clean the database first

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
