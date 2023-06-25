module.exports = {
  apps: [
    {
      name: 'template-api',
      script: 'node ./bin/www',
      watch: true,
      env_production: {
        NODE_ENV: 'production'
      },
      env_testing: {
        NODE_ENV: 'test'
      }
    }
  ]
}
