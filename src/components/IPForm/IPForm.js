import IPInput from '../IPInput/IPInput'
import SubmitBtn from '../SubmitForm/SubmitBtn'
import React from 'react'
import styles from './IPForm.module.css'
import getLocation from '../../helpers/getLocation'

class IPForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      IPAddress: '',
      isLoading: false,
      longitude: 0,
      latitude: 0
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({isLoading: true})
    try {
      const response = await getLocation(this.state.IPAddress)
      console.log('longitude, latitude', response)
      this.setState({
        isLoading: false,
        longitude: response.longitude,
        latitude: response.latitude
      })
    } catch(error) {
      console.log('error in handleSubmit', error)
    }
  }

  handleChange = (e) => {
    this.setState({IPAddress: e.target.value})
  }

  handleFocus = (e) => {
    this.setState({
      IPAddress: '',
      longitude: 0,
      latitude: 0,
    })
  }

  render() {
    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.headerText} >IP Locator</h1>
        </header>
        <main className={styles.body}>
          <h2 className={styles.instructions}> Submit IP address in order to identify location</h2>
          <form onSubmit={this.handleSubmit} className={styles.ipAddressForm}>
            <IPInput 
              value={this.state.IPAddress} 
              onChange={this.handleChange}
              onFocus={this.handleFocus}
            />
            <SubmitBtn isLoading={this.state.isLoading}/>
          </form>
          {!this.state.isLoading && !!this.state.longitude && <div className={styles.instructions}> 
            The IP Address: {this.state.IPAddress} is located at: {Math.abs(this.state.latitude)}° {this.state.latitude>0 ? 'N' : 'S'}, {Math.abs(this.state.longitude)}°  {this.state.longitude > 0 ? 'E' : 'W'}
            </div>}
        </main>
      </div>
    )
  }
}

export default IPForm