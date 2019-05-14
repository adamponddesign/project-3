import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    axios('/api/venues')
      .then(res => this.setState({ venues: res.data }))
  }

  render() {
    console.log(this.state.venues)
    return (
      <section className="section">
        <div className="container">

          {Auth.isAuthenticated() &&  <Link to="/venues/new" className="button">Add venue</Link>}


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
    )
  }
}

export default Index
