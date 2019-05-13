const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const venuesController = require('../controllers/venues')
const authController = require('../controllers/auth')
const yelpController = require('../controllers/yelp')

router.get('/', (req, res) => res.json({ message: 'Welcome to the After Midnight API' }))


router.get('/venues', venuesController.index)

router.post('/venues', secureRoute, venuesController.create)

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/search', yelpController.search)
router.get('/businesses/:id', yelpController.businesses)


module.exports = router
