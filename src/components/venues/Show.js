import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import bulmaCarousel from '../../../node_modules/bulma-carousel/dist/js/bulma-carousel.js'

import Carousel from '../common/ImageCarousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'



class VenuesShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      venue: null
    }
  }

  componentDidMount() {
    axios.get(`/api/venues/${this.props.match.params.id}`)
      .then(res => this.setState({ venue: res.data }))
    // bulmaCarousel.attach('#carousel-demo', {
    //   slideToScroll: 1,
    //   slidesToShow: 3
    // })
  }

  // const { _id, name, image, pricePoint, website, tel, address1, address2, postCode, lat, long, description, venueType } = this.state.venue

  render(){
    console.log(this.state.venue)
    if(!this.state.venue) return null
    const { name, openingTimes, images, pricePoint, website, coverImage, tel, address1, address2, postCode, lat, long, description, venueType, musicStyles } = this.state.venue

    return(
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="is-size-1">{name}</h1>
              <h2 className="is-size-4">{venueType}</h2>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="columns">

            <div className="column">
              <Carousel
                data={this.state.venue}
              />
            </div>

            <div className="column">
              <div id="address-block">
                <p>{address1}, {address2}</p>
                <p className="is-6">{postCode}</p>
                <div>{tel}</div>
                <a href={website}>{website}</a>
              </div>
              <hr/>

              <div>{description}</div>

              <hr/>

              <p>Price Point : {pricePoint}</p>
              <span>Music Styles : </span>
              {musicStyles.map(style =>
                <span key={style._id}>{style + ' '}</span>
              )}


              <table className="table is-fullwidth is-bordered">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th className="has-text-centered">Opens</th>
                    <th className="has-text-centered">Closes</th>

                  </tr>

                </thead>
                <tbody>
                  {openingTimes.map(day =>
                    <tr key={day._id}>

                      <th>{day.day}</th>
                      <td className="has-text-centered">{day.start}</td>
                      <td className="has-text-centered">{day.end}</td>

                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default VenuesShow
