import React from 'react'
import axios from 'axios'

import Form from './Form'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        openingTimes: {
          mon: {
            start: null,
            end: null
          },
          tue: {
            start: null,
            end: null
          },
          wed: {
            start: null,
            end: null
          },
          thu: {
            start: null,
            end: null
          },
          fri: {
            start: null,
            end: null
          },
          sat: {
            start: null,
            end: null
          },
          sun: {
            start: null,
            end: null
          }
        }
      },
      errors: {},
      venues: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleTimes = this.handleTimes.bind(this)
    this.handleSearchSelect = this.handleSearchSelect.bind(this)
  }

  // We have to make a request via our BE in order to prevent CORS issues to retrieve the data from the YELP API
  componentDidMount() {
    axios.get('/api/venues')
      .then(res => this.setState({ venues: res.data }))
  }


  handleSelect(e){
    e.forEach(el => {
      console.log(el.label)
    })
    const data = {...this.state.data, musicStyles: e}

    this.setState({ data })

  }


  handleSearchSelect(business) {
    // clean up data here...

    // const result = business.openingTimes.map(day => ({ start: day.start, end: day.end }))

    console.log('start times' + typeof business.startTimes)
    console.log('end times' + typeof business.endTimes)

    this.setState({ data: business })
  }


  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleTimes(e) {
    console.log(e.target.value, 'handle times value')
    console.log(e.target.dataset.type, 'dataset')
    const days = {...this.state.data.openingTimes[e.target.name], [e.target.dataset.type]: e.target.value }
    const openingTimes = {...this.state.data.openingTimes, [e.target.name]: days}

    console.log(openingTimes, 'openingtimes')
    this.setState({data: { openingTimes }})
    // this.setState({ openingTimes: {[field]: e.target.value} }, this.handleChange({target: {[e.target.name]: e.target.value}}))
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()

    axios.post('/api/venues', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/venues'))
      // The below is an attempt to reset the data inside the object so that we can submit a new entry
      .then(this.setState({ data: null }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <Form
                handleChange={this.handleChange}
                handleTimes={this.handleTimes}
                handleSubmit={this.handleSubmit}
                handleSelect={this.handleSelect}
                handleSearchSelect={this.handleSearchSelect}
                data={this.state.data}
                errors={this.state.errors}
                venues={this.state.venues}
              />
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default New
