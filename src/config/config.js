module.exports = {
  development: {
    serverPort: process.env.DEV_SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
    database_url: process.env.DEV_DB_URL
  },
  test: {
    serverPort: process.env.TEST_SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
    database_url: process.env.TEST_DB_URL
  },
  production: {
    serverPort: process.env.PROD_SERVER_PORT,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
    database_url: process.env.TEST_DB_URL
  }
}
