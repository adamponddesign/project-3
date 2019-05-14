const Venue = require('../models/Venue')

function indexRoute(req, res, next) {
  Venue.find()
    // .populate('openingTimes.open')
    .populate('createdBy')
    .then(venues => res.json(venues))
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser
  Venue.create(req.body)
    .then(venue => res.status(201).json(venue))
    .catch(next)
}

function showRoute(req, res, next) {
  Venue.findById(req.params.id)
    .then(venue => res.json(venue))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}
