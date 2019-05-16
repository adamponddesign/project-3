const mongoose = require('mongoose')
const { dbUri } = require('./config/environment')
const Venue = require('./models/Venue')
const User = require('./models/User')


mongoose.connect(dbUri, (err, db) => {

  db.dropDatabase()
    .then(() => {
      // add some new data
      return User.create({
        username: 'peterpond',
        email: 'peter.pond@hotmail.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
    })

    .then(user => {
      return Venue.create(
        [
          {
            images: [
              'https://static.designmynight.com/uploads/2016/05/12495963_10153206975071990_5787726811323545517_o-optimised.jpg',
              'https://static.designmynight.com/uploads/2016/05/FQ50-optimised.jpg'
            ],
            musicStyles: [],
            name: 'The Four Quarters',
            pricePoint: 'Rent due tomorrow',
            website: 'http://geocities.fourquartersbar.co.uk',
            tel: '+442037547622',
            address1: '187 Rye Lane',
            address2: null,
            postCode: 'SE15 4TP',
            lat: '51.4679321',
            lng: '-0.0668924',
            coverImage: './assets/fourquarter1.jpg',
            openingTimes: [
              {
                start: '1730',
                end: '0100',
                day: 'Tuesday'
              },
              {
                start: '1730',
                end: '0100',
                day: 'Wednesday'
              },
              {
                start: '1730',
                end: '0100',
                day: 'Thursday'
              },
              {
                start: '1730',
                end: '0200',
                day: 'Friday'
              },
              {
                start: '1300',
                end: '0200',
                day: 'Saturday'
              },
              {
                start: '1500',
                end: '0030',
                day: 'Sunday'
              }
            ],
            admissionFee: 0,
            description: 'Situated on Peckham’s bustling Rye Lane, Four Quarters opened its’ doors in June 2014 and quickly established itself as one of the area’s best loved bars as well as London’s first arcade bar. Alongside a top-class selection of craft beers, the bar boasts more than 15 original arcade cabs from the early 80’s up to the 2000’s, a cosy upstairs room with 10 retro consoles (open Fri-Sat) and a hidden basement cocktail bar and club space called ‘The Confession Box’ (open Thurs-Sat). Our kitchen is open Tuesday to Saturday serving up hearty hot-dogs, loaded fries and grilled cheese, while the bar is famous for its eclectic events, including theme parties, live music and a host of local DJ talent! All our arcades run on US quarters, which can be purchased at £1 for 4 (Four Quarters, geddit?!), while our consoles are all free to play. We also have two pinball tables which run on UK currency.',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://static1.squarespace.com/static/56093442e4b0ffbc0ff2243d/58b55ca65016e12e6723abd5/58b55d229f7456f670341623/1488280924805/Gibson-10.jpg?format=1500w',
              'https://static.designmynight.com/uploads/2018/07/Gibson_THE6137-2_preview-optimised.jpg'
            ],
            musicStyles: [],
            name: 'The Gibson',
            pricePoint: 'Rent due tomorrow',
            website: 'www.thegibsonbar.london',
            tel: '+442076082774',
            address1: '44 Old Street',
            address2: null,
            postCode: 'EC1V 9AQ',
            lat: '51.5239276',
            lng: '-0.0964486',
            coverImage: './assets/Gibson1.jpg',
            openingTimes: [
              {
                start: '1700',
                end: '0100',
                day: 'Monday'
              },
              {
                start: '1700',
                end: '0100',
                day: 'Tuesday'
              },
              {
                start: '1700',
                end: '0100',
                day: 'Wednesday'
              },
              {
                start: '1700',
                end: '0100',
                day: 'Thursday'
              },
              {
                start: '1700',
                end: '0200',
                day: 'Friday'
              },
              {
                start: '1700',
                end: '0200',
                day: 'Saturday'
              }
            ],
            admissionFee: 0,
            description: 'The Gibson cocktail was created in the first decade of the 1900s and, like all true classics, it has withstood the test of time. We like to think of the cocktail as a traveller, journeying through space and time. The Gibson bar pays homage to the cocktail’s journey. The bar is a time machine and through the selection of your drink, you are in control of your destination. Embarking from Edwardian London, your first stop might be a spring evening in the 1920s or a winter’s night of a time yet to come… all in the time it takes to mix a drink.',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://i.ytimg.com/vi/JfcpHFjX090/maxresdefault.jpg',
              'https://s3-media3.fl.yelpcdn.com/bphoto/vDYafb7CBIGWbFd2ohx08A/o.jpg',
              'https://s3-media1.fl.yelpcdn.com/bphoto/UtXVg2uL_Hqbas8YFPn5wA/o.jpg'
            ],
            musicStyles: [
              'Jazz',
              'Blues'
            ],
            name: 'Ain\'t Nothin\' But...',
            pricePoint: 'Rent due tomorrow',
            tel: '+442072870514',
            address1: '20 Kingly Street',
            address2: 'London',
            postCode: 'W1B 5PZ',
            openingTimes: [
              {
                start: '1700',
                end: '0100',
                day: 'Monday',
                isOvernight: true
              },
              {
                start: '1700',
                end: '0100',
                day: 'Tuesday',
                isOvernight: true
              },
              {
                start: '1700',
                end: '0100',
                day: 'Wednesday',
                isOvernight: true
              },
              {
                start: '1700',
                end: '0100',
                day: 'Thursday',
                isOvernight: true
              },
              {
                start: '1700',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1500',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              }
            ],
            lat: '51.5129631039042',
            lng: '-0.139623144472486',
            coverImage: 'https://i1.wp.com/perfectionistreviews.com/wp-content/uploads/2017/08/39144388765_80dd8adb39_k.jpg',
            website: 'http://www.aintnothinbut.co.uk/',
            description: 'The owners of this Kingly Street blues bar took the name from Georgia White’s ‘The Blues Ain’t Nothin’ But…’. It takes pride of place facing a cabin-like bar counter where pints of Adnams Bitter and Broadside, as well as Bitburger, Murphy’s and Mad Goose Purity are dispensed and duly taken back to a saloon-style back room accommodating the seating.That’s where the live music takes place most nights of the week, performed by tail-shakers happy to have a residency and equal acclaim from tourists and local enthusiasts. The staircase down to the toilets is decorated with caricatures of great names in blues and wider genres (the one of Screamin’ Jay Hawkins is a work of art).',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://s3-media2.fl.yelpcdn.com/bphoto/hZ1ObxH8VkZmRVhRLOjreg/o.jpg',
              'https://s3-media1.fl.yelpcdn.com/bphoto/tf6x1WlbxX_HCcJYsfbt1A/o.jpg',
              'https://s3-media3.fl.yelpcdn.com/bphoto/hR80t9X5b8lO3h7MFID0xA/o.jpg'
            ],
            musicStyles: [
              'Jazz',
              'Hip-Hop',
              'Funk',
              'Disco'
            ],
            name: 'Jazz Cafe',
            pricePoint: 'Rent due tomorrow',
            tel: '+442074856834',
            address1: '5 Parkway',
            address2: 'London',
            postCode: 'NW1 7PG',
            openingTimes: [
              {
                start: '1900',
                end: '0200',
                day: 'Monday',
                isOvernight: true
              },
              {
                start: '1900',
                end: '0200',
                day: 'Tuesday',
                isOvernight: true
              },
              {
                start: '1900',
                end: '0200',
                day: 'Wednesday',
                isOvernight: true
              },
              {
                start: '1900',
                end: '0200',
                day: 'Thursday',
                isOvernight: true
              },
              {
                start: '1900',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1900',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              },
              {
                start: '1900',
                end: '0200',
                day: 'Sunday',
                isOvernight: true
              }
            ],
            lat: '51.538732436501',
            lng: '-0.14318484710043',
            coverImage: 'http://yesofcorsa.com/wp-content/uploads/2017/05/Jazz-Cafe-Wallpaper-Download-Free.jpg',
            venueType: 'Club',
            website: 'https://thejazzcafelondon.com/',
            description: 'One of London’s most iconic live music venues. The Jazz Cafe. Live music gig venue with restaurant & club nights. Opens 7pm daily, until 3am at weekends.',
            createdBy: user
          },
          {
            images: [
              'http://static.designmynight.com/uploads/2014/01/the-black-heart-camden-review.jpg',
              'https://honorarylondoner.files.wordpress.com/2015/04/tl-inset_web-1.jpeg',
              'https://s3-media1.fl.yelpcdn.com/bphoto/mNbMNUAOqgsEe-tTRpe2NA/o.jpg'
            ],
            musicStyles: [
              'Rock',
              'Metal'
            ],
            name: 'The Black Heart',
            pricePoint: 'Rent due tomorrow',
            tel: '+442074289730',
            address1: '2-3 Greenland Place',
            address2: 'London',
            postCode: 'NW1 0AP',
            openingTimes: [
              {
                start: '1130',
                end: '0100',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1200',
                end: '0100',
                day: 'Saturday',
                isOvernight: true
              }
            ],
            lat: '51.538782',
            lng: '-0.141835',
            coverImage: 'http://farm5.staticflickr.com/4059/4700374966_736b3b8526_z.jpg',
            website: 'www.ourblackheart.com/',
            description: 'BEER BOOZE AND BANDS IN NO PARTICULAR ORDER',
            venueType: 'Boozer',
            createdBy: user
          },
          {
            images: [
              'https://media.timeout.com/images/103734373/630/472/image.jpg',
              'https://s3-media3.fl.yelpcdn.com/bphoto/te2yjc42qvGAVuw-zaiE7A/o.jpg',
              'https://s3-media4.fl.yelpcdn.com/bphoto/SNcSop55I1h2Z7lixsSAQA/o.jpg'
            ],
            musicStyles: [],
            name: 'Brick & Liquor',
            pricePoint: 'Rent due tomorrow',
            tel: '+447984426842',
            address1: '82 Mitcham Road',
            address2: 'Tooting Broadway',
            postCode: 'SW17 9NG',
            openingTimes: [
              {
                start: '1700',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1700',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              }
            ],
            lat: '51.4260136',
            lng: '-0.1656125',
            coverImage: 'https://www.justopenedlondon.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-31-at-00.36.39.png',
            website: 'https://www.facebook.com/brickandliquortooting/',
            description: 'Brick & Liquor, a swish addition to Tooting’s ever-expanding portfolio of nice neighbourhood venues, takes cocktail making very seriously. The menu is navigated via a graph, its axes based on how adventurous you’re feeling and how tipsy you fancy getting. All cocktails are classics with a twist (and a pun). A Pisco Sour becomes a Pisco Fever with the addition of basil; a Manhattan embellished with crème de bananes is a Banhattan. Purists might balk, but they were really good – a little too good in fact (the former was particularly light and zesty). There’s also a good little wine selection. But while the liquor’s in order, this place falls at the food. It was out of a third of the menu, so what we did order was more out of desperation than desire. Lamb skewers were chewy, the marinade undetectable; cauliflower couscous was mushy and depressing, the kind of thing you’d eat out of Tupperware at your desk. ‘Maybe they ran out of all of the good things,’ we wondered. Entirely possible, but if they can whip the food up to the same standard as the drinks, this would be a brilliantly well-rounded local.',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://aplo.co/admin/web/uploads/space/IMG_0955-e1477941368694yes.jpg',
              'https://media.timeout.com/images/103632206/image.jpg',
              'https://media.timeout.com/images/103632208/630/472/image.jpg'
            ],
            musicStyles: [],
            name: 'Mirth, Marvel and Maud',
            pricePoint: 'Rent due tomorrow',
            tel: '+442085208636',
            address1: '186 Hoe Street',
            address2: 'London',
            postCode: 'E17 4QH',
            openingTimes: [
              {
                start: '1600',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1200',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              }
            ],
            lat: '51.5860688307787',
            lng: '-0.0200384738654152',
            coverImage: 'https://live.staticflickr.com/894/41416479335_fe1a834ea4_b.jpg',
            description: 'First, let’s deal with that name. Pub-makeover aficionados Antic wanted to bring the mirth aspect back to this, a bar-cum-restaurant-cum-arts space within a disused, Grade II-listed Walthamstow cinema. Refurbishing it took a lot of time, money and care, so the process was something of a marvel. And, it turns out, Antic boss Anthony Thomas went to a similar place as a kid with his great aunt Maud. If that all sounds a bit tenuous, and merely an excuse to give the place a vague feeling of nostalgic glitz, then sure – and why not? The space is split into two: ‘Mirth’ is the foyer bar and restaurant, ‘Maud’ the screening room arts space. From the gilt plasterwork, to the vintage furniture on the mezzanine, to the Sinatra seeping from the speakers, faded glamour is very much this place’s USP. It’s difficult to stand in the foyer and not picture the buzzing picture palace of a bygone East End. Antic have applied a few neat little touches, like turning the old ticket kiosks into a cocktail bar, which offers a few neat spins on the classics (a Bloody Maud adds port and Mexican spices to the vodka, lemon and tomato juice). The main bar at the rear of the ground floor stocks the requisite local lagers and ales. Staff are chirpy. Curiously, the outlandish nature of the venue is a double-edged sword when it comes to atmosphere. It was thrumming with life on a Friday evening, but on a deserted Sunday night it felt more spooky than swanky. But with an events programme packed with screenings, gigs, stand-up and DJ sets, sparse crowds shouldn’t be an issue for long. This feels like it might become E17’s answer to Wilton’s Music Hall. It might have one eye set on past glories, but the future looks bright for Mirth, Marvel and Maud.',
            website: 'http://mirthmarvelandmaud.com/',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://img.theculturetrip.com/450x300/smart/wp-content/uploads/2018/11/cwekpy.jpg',
              'https://s3-media3.fl.yelpcdn.com/bphoto/PmFYH5ECqoYfpXeXvSiEjQ/o.jpg',
              'https://s3-media3.fl.yelpcdn.com/bphoto/xCgggQXLi7uhrDysPE9P0w/o.jpg'
            ],
            musicStyles: [
              'Jazz'
            ],
            name: 'Nightjar',
            pricePoint: 'Middle of the month',
            tel: '+442072534101',
            address1: '129 City Road',
            address2: 'London',
            postCode: 'EC1V 1JB',
            openingTimes: [
              {
                start: '1800',
                end: '0100',
                day: 'Monday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0100',
                day: 'Tuesday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0100',
                day: 'Wednesday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0200',
                day: 'Thursday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0300',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0300',
                day: 'Saturday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0100',
                day: 'Sunday',
                isOvernight: true
              }
            ],
            lat: '51.5265350341797',
            lng: '-0.0877109989523888',
            coverImage: 'https://media-cdn.tripadvisor.com/media/photo-s/17/1b/98/b6/the-legendary-bar-at.jpg',
            website: 'https://barnightjar.com/',
            description: 'Nightjar’s reputation for breathing new life into forgotten cocktails and bringing fresh perspective to classic recipes and presentation is world renowned.',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://i.pinimg.com/originals/1d/f1/8c/1df18c608866c579ed8a4c01235512b1.jpg',
              'https://s3-media3.fl.yelpcdn.com/bphoto/7lcJuCHMysbfdHxSBlnIGA/o.jpg',
              'https://s3-media4.fl.yelpcdn.com/bphoto/5tpkmU9DxSHRhmbBUD7pYA/o.jpg'
            ],
            musicStyles: [],
            name: 'Ridley Road Market Bar',
            pricePoint: 'Rent overdue',
            tel: 'NA',
            address1: '49 Ridley Road',
            address2: 'London',
            postCode: 'E8 2NP',
            openingTimes: [
              {
                start: '1800',
                end: '0030',
                day: 'Wednesday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0200',
                day: 'Thursday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1800',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              }
            ],
            lat: '51.548233',
            lng: '-0.0724087',
            coverImage: 'https://static.wixstatic.com/media/d3b7dd_e7837b3fc2bc4175a9d8ad4d880dc042.jpg',
            website: 'http://www.ridleyroadmarketbar.com/',
            description: 'Whichever genius decided to convert a scruffy store halfway down a traditional London marketplace into a tiki dive bar deserves a medal. It’s resolutely egalitarian (no reservations, no guestlist: just show up and get merry), the decor is almost laughably DIY, the hooch is cheap (three quid for a can of Red Stripe is not to be sniffed at in this part of town) and the tunes – reggae, motown and party pop – keep the joint solidly jumping until 2am at the weekend. There’s a surprisingly respectable cocktail menu too, all for a fiver, served informally in plastic tumblers. The ginger mojito brings welcome warmth to that minty old stalwart, the piña colada goes down a treat amid the cheesy beach bar vibes, and the original creation Kamm Kardashian is as irresistibly kitsch as its big-arsed namesake.',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://cdn.venuescanner.com/photos/83b57303e82a5563228e764f0d128f97.jpg',
              'https://s3-media2.fl.yelpcdn.com/bphoto/SymFpNCogHg0NR577oUu8Q/o.jpg',
              'https://s3-media1.fl.yelpcdn.com/bphoto/LQbfz7j5JWx701XXbOxBKw/o.jpg'
            ],
            musicStyles: [],
            name: 'Ruby\'s',
            pricePoint: 'Rent due tomorrow',
            tel: '+442079233966',
            address1: '76 Stoke Newington Road',
            address2: 'London',
            postCode: 'N16 7XB',
            openingTimes: [
              {
                start: '1830',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1830',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              }
            ],
            lat: '51.5527317',
            lng: '-0.0746791',
            coverImage: 'http://www.rubysdalston.com/wp-content/uploads/2019/01/rubys-bar-100-635x350.jpg',
            description: 'An unfussy two-for-one basement drinking experience in the heart of Dalston: go small with the cocktail bar or large with the lounge. Ruby’s cocktail bar is already a fixture on the Dalston end of Stoke Newington Road. Now it’s relaunched, supersized, but thankfully no more slick, as Ruby’s Bar and Lounge. To find it, you still need to look out for the reclaimed cinema marquee and walk down a dingy staircase as if you’re on the hunt for drugs or a chest infection. But once at the bottom of the steps, you can imagine you’re stepping onto a transatlantic flight: turn left for an intimate, first-class encounter with a cocktail; turn right for a more laidback evening in a space three times the size and where the focus is on beer, wine, Vietnamese bar snacks and a louche, dimly-lit atmosphere. It’s easy to forget the time, day, week, month and year in these windowless basements. And that’s a good thing. The unfussy décor looks like the owner, Tom Gibson, whose family business sells restored furniture and hires out former industrial locations for shoots and events, has raided every one of our nans’ flats for the lounge’s nicely random mid-century fixtures and fittings (including a giant bingo numbers sign). But it’s far from achingly retro; instead it has more of an upscale jumble sale vibe. The drinks help the sense of timelessness. The cocktail menu remains strong and, being February, I stuck to the mildly spicy Winter Warmers selection. But all year they’ve got over 16 inventive mixes on the list (the best names have to be Requiem For a Monk and Bananadrama). In the lounge, the beer selection is appealing. Of the pale ales, I liked the Pressure Drop Pale Fire, and can also recommend the Hopf Helle Weisse wheat beer. The bar snacks are from Hanoi Kitchen, and they’re substantial enough for a meal: green mango and papaya salad with prawns (served in a giant, booze-soaking rice cracker) and a plate of two lamb chops both came bursting with spicy, citrus flavours. The downside? At some point you’ll remember there’s a whole, cruel world back up those stairs.',
            website: 'http://www.rubysdalston.com/',
            venueType: 'Bar',
            createdBy: user
          },
          {
            images: [
              'https://s3-media2.fl.yelpcdn.com/bphoto/rnPz0_begaiwVhbGjrSVqg/o.jpg',
              'https://s3-media2.fl.yelpcdn.com/bphoto/k-MSYED7TWYVXCHWh2Mq4Q/o.jpg',
              'https://s3-media2.fl.yelpcdn.com/bphoto/ILrT5Ih4SmdwkWSUex1KRQ/o.jpg'
            ],
            musicStyles: [],
            name: 'Old China Hand',
            pricePoint: 'Rent overdue',
            tel: '+442072787678',
            address1: '8 Tysoe Street',
            address2: 'London',
            postCode: 'EC1R 4RQ',
            openingTimes: [
              {
                start: '1130',
                end: '0200',
                day: 'Monday',
                isOvernight: true
              },
              {
                start: '1130',
                end: '0200',
                day: 'Tuesday',
                isOvernight: true
              },
              {
                start: '1130',
                end: '0200',
                day: 'Wednesday',
                isOvernight: true
              },
              {
                start: '1130',
                end: '0200',
                day: 'Thursday',
                isOvernight: true
              },
              {
                start: '1130',
                end: '0200',
                day: 'Friday',
                isOvernight: true
              },
              {
                start: '1130',
                end: '0200',
                day: 'Saturday',
                isOvernight: true
              },
              {
                start: '1130',
                end: '0200',
                day: 'Sunday',
                isOvernight: true
              }
            ],
            lat: '51.526747',
            lng: '-0.108994',
            coverImage: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/01/03/09/chinahand_243x244.jpg?w968',
            website: 'https://www.noordinarypub.com/',
            description: 'No food, just drinks and snacks, and only from small independents in England, Ireland, Scotland and Wales. No loud music, no cocktails, just beer, wine, spirits and soft drinks. And ping pong and darts.',
            venueType: 'Boozer',
            createdBy: user
          }
        ]
      )
    })
    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
