const rp = require('request-promise')

function searchRoute(req, res, next) {
  rp({
    url: 'https://api.yelp.com/v3/businesses/search',
    qs: req.query,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    },
    json: true
  })
    .then(response => res.json(response))
    .catch(next)
}

module.exports = {
  search: searchRoute
}
