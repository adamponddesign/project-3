import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_API_TOKEN
})

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      venues: [],
      center: {
        lat: -0.127854,
        lng: 51.508733
      },
      toggleSidebar: false
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ center: { lng: latitude, lat: longitude }
      })
    })
    axios('/api/venues')
      .then(res => this.setState({ venues: res.data }))
  }


  render() {
    console.log(this.state.venues)

    // const { lat, lng } = this.state.venues
    return (
      <main>
        <div className="map">     {/*  map visual area  */}
          <Map
            style='mapbox://styles/adampond/cjvktkg640gxm1cnuwe0ffkhx'       //  import mapbox style
            center = {[ this.state.center.lat, this.state.center.lng ]}      //  set starting coordinates from state
            zoom = {[11]}          // initial zoom
            containerStyle={{
              height: '70vh',          // set map size
              width: '100vw'
            }}>

            {this.state.venues.map(marker =>           // get coordinates for each database item and plot on map using markers

              <Marker
                key={marker._id}
                coordinates={[marker.lng, marker.lat]}
                anchor="bottom">
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Owl_%2813455%29_-_The_Noun_Project.svg/720px-Owl_%2813455%29_-_The_Noun_Project.svg.png'
                  width='20px'
                /> {/*  marker icon */}
              </Marker>
            )}
            <Marker key={this.state.center.id}
              coordinates={[ this.state.center.lat, this.state.center.lng ]}
              anchor="bottom">
              <img
                src='http://hubscope.com/wp-content/uploads/2016/03/you-are-here-icon.png'
                width='55px'
              /> {/*  marker icon */}
            </Marker>
          </Map>
        </div>


        <div className="container">
          {Auth.isAuthenticated() &&  <Link to="/venues/new" className="button">Add venue</Link>}
          <hr/>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.venues.map(venue =>
                <div key={venue._id} className="column is-one-quarter-desktop is-one-third-tablet">
                  <Link to={`/venues/${venue._id}`}>
                    <Card {...venue} />
                  </Link>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Index
