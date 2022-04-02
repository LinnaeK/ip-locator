import IPInput from './IPInput'
import SubmitBtn from './SubmitBtn'
import React, { useState } from 'react'

class IPForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      IPAddress: '123',
      isLoading: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({isLoading: true})
  }

  handleChange = (e) => {
    this.setState({IPAddress: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>IP Locator</h1>
        <p> Submit IP address in order to identify location</p>
        <div>IPAddress: {this.state.IPAddress} </div>
        <form onSubmit={this.handleSubmit}>
          <IPInput 
            value={this.state.IPAddress} 
            onChange={this.handleChange}
          />
          <SubmitBtn isLoading={this.state.isLoading}/>
        </form>
        {this.state.isLoading && <div> 
          {this.state.IPAddress}
        </div>}
      </div>
    )
  }
}

export default IPForm