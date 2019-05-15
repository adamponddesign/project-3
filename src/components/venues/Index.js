import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'
import ReactMapboxGl, { ZoomControl, Popup, Marker } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_API_TOKEN,
  scrollZoom: false
})

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      venues: [],
      center: {
        lat: -0.127683,
        lng: 51.507332
      },
      userCurrentLocation: {
        lat: -0.127854,
        lng: 51.508733
      },
      marker: {},
      markerClick: false,
      zoom: 11
    }

    this.popUpShow = this.popUpShow.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ userCurrentLocation: { lng: latitude, lat: longitude }})
    })
    axios('/api/venues')
      .then(res => this.setState({ venues: res.data }))
  }



  popUpShow(marker){
    this.setState({ marker, markerClick: !this.state.markerClick })
    this.setState({ center: { lat: marker.lng, lng: marker.lat } })
    this.setState({ zoom: 14 })
    console.log(this.state.marker)
  }



  centerMapOnUserFunction(){
    console.log('button clicked')
    this.setState({ center: { lat: this.state.userCurrentLocation.lat, lng: this.state.userCurrentLocation.lng } })
  }





  render() {
    console.log('marker clicked ' + this.state.markerClick)


    return (
      <main>
        <div className="map">     {/*  map visual area  */}




          <Map

            style='mapbox://styles/adampond/cjvktkg640gxm1cnuwe0ffkhx'       //  import mapbox style
            center = {[ this.state.center.lat, this.state.center.lng ]}      //  set starting coordinates from state
            zoom={[this.state.zoom]}           // initial zoom
            containerStyle={{
              height: '100vh',          // set map size
              width: '100vw'
            }}>

            {this.state.venues.map(marker =>           // get coordinates for each database item and plot on map using venues

              <Marker
                key={marker._id}

                coordinates={[marker.lng, marker.lat]}
                onClick={() => this.popUpShow(marker)}
                anchor="bottom">
                <img
                  src='./assets/blueOwl1svg.png'
                  width='60px'
                />
              </Marker>


            )}


            <Marker key={this.state.userCurrentLocation.id}
              coordinates={[ this.state.userCurrentLocation.lat, this.state.userCurrentLocation.lng ]}
              anchor="bottom">
              <img
                src='http://hubscope.com/wp-content/uploads/2016/03/you-are-here-icon.png'
                width='55px'
              />
            </Marker>

            {this.state.markerClick &&

              <Popup
                // where the pop up will be positioned
                coordinates={[this.state.marker.lng, this.state.marker.lat]}
                anchor="bottom-left"
                offset={[13, -38]}

              >
                {/* what to render in the popup */}
                <div className="marker-popup-content">
                  <p>{this.state.marker.name}</p>
                  <p>{this.state.marker.address1}</p>
                  <p>{this.state.marker.postCode}</p>
                  <p>{this.state.marker.name}</p>

                  <Link to={`/venues/${this.state.marker._id}`}>
                    MORE INFO
                  </Link>




                </div>



              </Popup>}
            <ZoomControl/>


            <div className="box has-text-centered">
              <button
                className="button locateButton has-text-centered"
                onClick={() => this.centerMapOnUserFunction()}
              >Center the map where I am</button>
            </div>



            



          </Map>



        </div>

























        {/*  <div className="container">
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

        </section> */}
      </main>
    )
  }
}

export default Index
