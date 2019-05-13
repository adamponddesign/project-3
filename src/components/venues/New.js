import React from 'react'
import axios from 'axios'

import Form from './Form'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      venues: []      //empty array
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    axios.get('/api/venues')
      .then(res => this.setState({ venues: res.data }))
  }


  handleSelect(e){
    // console.log(e)
    e.forEach(el => {
      console.log(el.label)
    })
    // console.log(value)
    const data = {...this.state.data, musicStyles: e}


    this.setState({ data })
    console.log(this.state.data)



    // let genre = []
    // e.forEach(el => {
    //   genre = el.label + ' ' + genre
    //   return genre
    // })
    //
    // const data = {...this.state.data, musicStyles: genre}
    //
    //
    // this.setState({ data })
    // console.log(this.state.data)
  }





  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.post('/api/venues', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/venues'))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleSelect={this.handleSelect}
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
