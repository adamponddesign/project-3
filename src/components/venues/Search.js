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
        if(!res.data.isOvernight){
          return this.setState({ message: 'This venue is not open overnight! Try another one...', menuIsOpen: false, options: null })
        }

        this.props.handleSearchSelect(res.data)
        this.setState({ menuIsOpen: false, options: null, term: null })
      })
  }

  // Attempt at handling the submit on enter key press
  // checkSubmit(e) {
  //   if(e && e.keyCode === 13) {
  //     {this.getOptions}
  //   }
  // }

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
        {this.state.message && <p className="warning">{this.state.message}</p>}
      </div>
    )
  }
}

export default Search
