const router = require('express').Router()

module.exports = router

// list of routes
router.use('/users', require('./users'))
router.use('/tasks', require('./tasks'))
