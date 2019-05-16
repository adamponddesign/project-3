import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import bulmaCarousel from '../../../node_modules/bulma-carousel/dist/js/bulma-carousel.js'


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
    if(!this.state.venue) return null
    const { _id, name, images, pricePoint, website, coverImage, tel, address1, address2, postCode, lat, long, description, venueType } = this.state.venue

    return(
      <div>
        {/*
        <section className="hero is-medium has-carousel">
          <div id="carousel-demo" className="hero-carousel">
            <div className="item-1">
              <img src={images[0]}/>
            </div>
            <div className="item-2">
              <img src={images[1]}/>
            </div>
            <div className="item-3">
              <img src={images[2]}/>
            </div>
          </div>
          <div className="hero-head"></div>
          <div className="hero-body"></div>
          <div className="hero-foot"></div>
        </section>
        */}
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="is-size-1">
                {name}
              </h1>
              <h2 className="is-size-4">
                {venueType}
              </h2>
            </div>
          </div>




          <div className="container">

            <div className="columns">
              <div className="column">
                <figure className="image is-4by3">
                  <img src={coverImage}/>
                </figure>
                <figure className="image is-4by3">
                  <img src={images[1]}/>
                </figure>
                <figure className="image is-4by3">
                  <img src={images[2]}/>
                </figure>
              </div>
              <div className="column">
                <h4 className="is-size-5">Address:</h4>
                <p>{address1}, {address2}</p>
                <p className="is-6">{postCode}</p>
                <div>Tel: {tel}</div>
                <hr />
                <div>{description}</div>
                <a href={website}>{website}</a>
                <hr />
                <p>{pricePoint}</p>
              </div>

            </div>


          </div>
        </section>



      </div>
    )
  }

}

export default VenuesShow
