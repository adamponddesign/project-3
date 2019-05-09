const mongoose = require('mongoose')
const { dbUri } = require('./config/environment')
const Venue = require('./models/Venue')


mongoose.connect(dbUri, (err, db) => {

  db.dropDatabase()

    .then(() => {
      return Venue.create([{
        name: 'The Four Quarters',
        pricePoint: 'Rent due tomorrow',
        website: 'http://geocities.fourquartersbar.co.uk',
        tel: '+442037547622',
        address1: '187 Rye Lane',
        address2: null,
        postCode: 'SE15 4TP',
        lat: '51.4679321',
        long: '-0.0668924',
        images: './assets/fourquarter1.jpg',
        openingTimes: [{
          'open': [
            {
              'is_overnight': true,
              'start': '1730',
              'end': '0100',
              'day': 1
            },
            {
              'is_overnight': true,
              'start': '1730',
              'end': '0100',
              'day': 2
            },
            {
              'is_overnight': true,
              'start': '1730',
              'end': '0100',
              'day': 3
            },
            {
              'is_overnight': true,
              'start': '1730',
              'end': '0200',
              'day': 4
            },
            {
              'is_overnight': true,
              'start': '1300',
              'end': '0200',
              'day': 5
            },
            {
              'is_overnight': true,
              'start': '1500',
              'end': '0030',
              'day': 6
            }
          ]
        }],
        admissionFee: 0,
        description: 'Situated on Peckham’s bustling Rye Lane, Four Quarters opened its’ doors in June 2014 and quickly established itself as one of the area’s best loved bars as well as London’s first arcade bar. Alongside a top-class selection of craft beers, the bar boasts more than 15 original arcade cabs from the early 80’s up to the 2000’s, a cosy upstairs room with 10 retro consoles (open Fri-Sat) and a hidden basement cocktail bar and club space called ‘The Confession Box’ (open Thurs-Sat). Our kitchen is open Tuesday to Saturday serving up hearty hot-dogs, loaded fries and grilled cheese, while the bar is famous for its eclectic events, including theme parties, live music and a host of local DJ talent! All our arcades run on US quarters, which can be purchased at £1 for 4 (Four Quarters, geddit?!), while our consoles are all free to play. We also have two pinball tables which run on UK currency.',
        venueType: 'Bar',
        musicStyle: 'None'
      },{
        name: 'The Gibson',
        pricePoint: 'Rent due tomorrow',
        website: 'www.thegibsonbar.london',
        tel: '+442076082774',
        address1: '44 Old Street',
        address2: null,
        postCode: 'EC1V 9AQ',
        lat: '51.5239276',
        long: '-0.0964486',
        images: './assets/Gibson1.jpg',
        openingTimes: [{
          'open': [
            {
              'is_overnight': true,
              'start': '1700',
              'end': '0100',
              'day': 0
            },
            {
              'is_overnight': true,
              'start': '1700',
              'end': '0100',
              'day': 1
            },
            {
              'is_overnight': true,
              'start': '1700',
              'end': '0100',
              'day': 2
            },
            {
              'is_overnight': true,
              'start': '1700',
              'end': '0100',
              'day': 3
            },
            {
              'is_overnight': true,
              'start': '1700',
              'end': '0200',
              'day': 4
            },
            {
              'is_overnight': true,
              'start': '1700',
              'end': '0200',
              'day': 5
            }
          ]
        }],
        admissionFee: 0,
        description: 'The Gibson cocktail was created in the first decade of the 1900s and, like all true classics, it has withstood the test of time. We like to think of the cocktail as a traveller, journeying through space and time. The Gibson bar pays homage to the cocktail’s journey. The bar is a time machine and through the selection of your drink, you are in control of your destination. Embarking from Edwardian London, your first stop might be a spring evening in the 1920s or a winter’s night of a time yet to come… all in the time it takes to mix a drink.',
        venueType: 'Bar',
        musicStyle: 'Jazz'
      }
      ])
    })
    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
