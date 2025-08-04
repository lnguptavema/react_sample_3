// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  onFirst = () => {
    const {firstname} = this.state
    this.setState(
      prevState => ({firstname: !prevState.firstname}),
      // or use it return {firstname: (prevState.firstname = !firstname)}
    )
  }

  onLast = () => {
    const {lastname} = this.state
    this.setState(
      prevState => ({lastname: !prevState.lastname}),
      // or use it   return {firstname: (prevState.firstname = !firstname)}
    )
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="maincont">
        <h1>Show/Hide</h1>
        <div className="divv">
          <div className="container1">
            {' '}
            <button type="button" onClick={this.onFirst}>
              Show/Hide Firstname
            </button>
            {firstname ? <p>Joe</p> : null}
          </div>{' '}
          <div className="container2">
            <button type="button" onClick={this.onLast}>
              Show/Hide Lastname
            </button>
            {lastname ? <p>Jonas</p> : null}
          </div>{' '}
        </div>
      </div>
    )
  }
}
export default ShowHide
