'use strict'

const debug = require('debug')('template-api:api-service')

class ApiService {
  // Singleton Pattern

  static build () {
    if (!this._apiServiceInstance) {
      this._apiServiceInstance = new ApiService()
      debug('Initialize api')
    }
    return this._apiServiceInstance
  }

  async test () {
    debug('It works!')
  }
}

module.exports = ApiService
