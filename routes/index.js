const express = require('express')
const router = express.Router()

const viewsRoute = require('./viewsRoute')
router.use('/views', viewsRoute)

module.exports = router