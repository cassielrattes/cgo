const express = require('express')
const router = express.Router()

const viewsRoute = require('./viewsRoute')
router.use('/', viewsRoute)

module.exports = router