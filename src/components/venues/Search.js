// This is for the search component to be used when a customer is looking up a specific venue
import Select from 'react-select'
import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

const pricePoints = ['Rent overdue', 'Rent due tomorrow', 'Middle of the month', 'Blowout']
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      options: null,
      term: null,
      menuIsOpen: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.getOptions = this.getOptions.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({ term: value })
  }

  getOptions() {
    return axios.get('/api/search', {
      params: {
        term: this.state.term,
        location: 'London, UK'
      },
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
      .then(res => {
        return res.data.businesses.map(business => {
          return {
            label: `${business.name}, ${business.location.address1}, ${business.location.zip_code}`,
            value: business.id
          }
        })
      })
      .then(options => this.setState({ options, menuIsOpen: true }))
  }

  handleSelect(option) {
    // load the full details using the ID
    // call `this.props.handleSearchSelect` passing the business through
    // clean up the data beforehand...
    axios.get(`/api/businesses/${option.value}`, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
      .then(res => {
        const {
          name,
          price,
          phone: tel,
          coordinates: {
            latitude: lat,
            longitude: lng
          },
          location: {
            address1,
            address2,
            zip_code: postCode
          }
        } = res.data

        let {
          hours: [{
            open: openingTimes
          }]
        } = res.data

        const pricePoint = pricePoints[price.length-1]

        openingTimes = openingTimes.map(time => {
          time.day = daysOfTheWeek[time.day]
          time.isOvernight = time.is_overnight
          return time
        })

        const isOvernight = openingTimes.some(time => time.isOvernight)

        if(!isOvernight){
          return this.setState({ message: 'Invalid', menuIsOpen: false, options: null })
        }

        this.props.handleSearchSelect({ name, pricePoint, tel, address1, address2, postCode, openingTimes, lat, lng })
        this.setState({ menuIsOpen: false, options: null, term: null })
      })
  }

  render() {
    return (
      <div>
        {this.state.options ? (
          <Select
            options={this.state.options}
            onChange={this.handleSelect}
            menuIsOpen={this.state.menuIsOpen}
          />
        ) : (
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" value={this.state.term || ''} onChange={this.handleChange} placeholder="Search by name or business type" />
            </div>
            <div className="control">
              <button className="button is-info" type="button" onClick={this.getOptions}>Go</button>
            </div>
          </div>
        )}
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    )
  }
}

export default Search
