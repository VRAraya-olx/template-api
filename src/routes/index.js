'use strict'

const router = require('express').Router()

const ApiController = require('../controllers/api')
// const validatorHandler = require('../middlewares/validator-handler')
// const schemas = require('../schemas/api')

router.get(
  '/get/',
  async function (req, res, next) {
    try {
      await ApiController.test()
      res.status(200).json('OK')
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
