import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

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
  }

  // const { _id, name, image, pricePoint, website, tel, address1, address2, postCode, lat, long, description, venueType } = this.state.venue

  render(){
    if(!this.state.venue) return null
    const { _id, name, image, pricePoint, website, tel, address1, address2, postCode, lat, long, description, venueType } = this.state.venue

    return(
      <div>
        <section className="hero">

          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {name}
              </h1>
              <h2 className="subtitle">
                {venueType}
              </h2>
            </div>
          </div>

        </section>

        <section className="section">
          <div className="container">

            <div className="columns">
              <div className="column">
                <div className="level">
                  <div className="level-left">
                    <p>{address1}</p>
                    <p>{address2}</p>
                    <div>Tel: {tel}</div>
                  </div>
                </div>
              </div>
              <div className="column">
              Second column
              </div>
            </div>


          </div>
        </section>



      </div>
    )
  }

}

export default VenuesShow
