const apiService = require('../services/api-service').build()

async function test () {
  return await apiService.test()
}

module.exports = {
    test
}
  