const router = require('express').Router()
const venuesController = require('../controllers/venues')

router.get('/', (req, res) => res.json({ message: 'Welcome to the After Midnight API' }))

router.get('/venues', venuesController.index)

module.exports = router
