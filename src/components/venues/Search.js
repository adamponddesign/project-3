// This is for the search component to be used when a customer is looking up a specific venue
import Select from 'react-select'
import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      options: null,
      term: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.getOptions = this.getOptions.bind(this)
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
          return { label: `${business.name}, ${business.location.address1}, ${business.location.zip_code}`, 
            value: business.id
          }
        })
      })
      .then(options => this.setState({ options }))
  }

  render() {
    console.log(this.state)
    return (
      this.state.options ? (
        <Select
          options={this.state.options}
          onChange={this.getOptions}
          menuIsOpen
        />
      ) : (
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" onChange={this.handleChange} placeholder="Search by name or business type" />
          </div>
          <div className="control">
            <button className="button is-info" type="button" onClick={this.getOptions}>Go</button>
          </div>
        </div>
      )
    )
  }


}

export default Search
