export default () => ({
  port: parseInt(process.env.PORT, 10) || 3307,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3307,
    database: process.env.DB_NAME || 'nestjs',
    username: process.env.DB_USER_NAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
  },
});
