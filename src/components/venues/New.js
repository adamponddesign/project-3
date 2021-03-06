import React from 'react'
import axios from 'axios'

import Form from './Form'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        openingTimes: [
          { day: 'Monday', start: '', end: '' },
          { day: 'Tuesday', start: '', end: '' },
          { day: 'Wednesday', start: '', end: '' },
          { day: 'Thursday', start: '', end: '' },
          { day: 'Friday', start: '', end: '' },
          { day: 'Saturday', start: '', end: '' },
          { day: 'Sunday', start: '', end: '' }
        ]
      },
      errors: {},
      venues: [],
      musicStyles: [],
      message: {}
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


  handleSelect(selected){
    const musicStyles = selected.map(elem => elem.value)
    const data = { ...this.state.data, musicStyles }
    this.setState({ data })

  }

  handleSearchSelect(business) {
    this.setState({ data: business })
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleTimes(e) {
    const [ day, point ] = e.target.name.split('|')
    const index = this.state.data.openingTimes.findIndex(time => time.day === day)
    const time = { ...this.state.data.openingTimes[index] }
    console.log(day, point, index, time)
    time[point] = e.target.value
    time.isOvernight = time.end < time.start && time.end < '2359'

    const openingTimes = [
      ...this.state.data.openingTimes.slice(0, index),
      time,
      ...this.state.data.openingTimes.slice(index+1)
    ]

    const data = { ...this.state.data, openingTimes }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post('/api/venues', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/venues'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
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
