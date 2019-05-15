const rp = require('request-promise')

const pricePoints = ['Rent overdue', 'Rent due tomorrow', 'Middle of the month', 'Blowout']
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

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

function businessesRoute(req, res, next) {
  rp({
    url: `https://api.yelp.com/v3/businesses/${req.params.id}`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    },
    json: true
  })
    .then(response => {
      const {
        name,
        price,
        phone: tel,
        image_url: coverImage,
        photos: images,
        coordinates: {
          latitude: lat,
          longitude: lng
        },
        location: {
          address1,
          address2,
          zip_code: postCode
        }
      } = response

      let {
        hours: [{
          open: openingTimes
        }]
      } = response

      const pricePoint = pricePoints[price.length-1]

      openingTimes = openingTimes.map(time => {
        time.day = daysOfTheWeek[time.day]
        time.isOvernight = time.is_overnight
        delete time.is_overnight
        return time
      })

      openingTimes = openingTimes.filter(time => time.isOvernight)
      const isOvernight = openingTimes.length > 0

      res.json({
        name,
        pricePoint,
        tel,
        address1,
        address2,
        postCode,
        openingTimes,
        lat,
        lng,
        coverImage,
        images,
        isOvernight
      })
    })
    .catch(next)
}

module.exports = {
  search: searchRoute,
  businesses: businessesRoute
}
