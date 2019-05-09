const Venue = require('../models/Venue')

function indexRoute(req, res, next) {
  Venue.find()
    .populate('openingTimes.open')
    .then(venues => res.json(venues))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
