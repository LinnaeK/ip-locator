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
      longitude: 0,
      latitude: 0, 
      hasLoadedData: false,
      hasRetrievalError: false,
      hasInputError: false
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    if(this.state.IPAddress.match(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))(\/(([3]?[0-2])|([0-2]?[0-9])))?\b/)){
      try {
        const response = await getLocation(this.state.IPAddress)
        this.setState({
          longitude: response.longitude,
          latitude: response.latitude,
          hasLoadedData: true
        })
      } catch(error) {
        this.setState({
          hasRetrievalError: true
        })
        console.error('error in handleSubmit', error)
      }
    } else {
      this.setState({
        hasInputError: true
      })
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
      hasLoadedData: false,
      hasRetrievalError: false,
      hasInputError: false
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
            <SubmitBtn />
          </form>
          {
          this.state.hasLoadedData && !!this.state.longitude && <div className={styles.instructions}> 
            The IP Address: {this.state.IPAddress} is located at: {Math.abs(this.state.latitude)}° {this.state.latitude>0 ? 'N' : 'S'}, {Math.abs(this.state.longitude)}°  {this.state.longitude > 0 ? 'E' : 'W'}
            </div>
          }{
          this.state.hasRetrievalError && <div className={styles.instructions}>
            Sorry, we could not find any records of the IP Address {this.state.IPAddress}. 
          </div>
          }{
            this.state.hasInputError && <div className={styles.error}>
              Please enter a valid IP Address.
            </div>
          }
        </main>
      </div>
    )
  }
}

export default IPForm