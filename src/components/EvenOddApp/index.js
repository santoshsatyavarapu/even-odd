// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 'Even', count: 0}

  addRandomNumber = () => {
    const {count} = this.state

    const randomNumber = Math.round(Math.random() * 100) + count

    this.setState({count: randomNumber})

    if (randomNumber % 2 === 1) {
      this.setState({number: 'Odd'})
    } else {
      this.setState({number: 'Even'})
    }
  }

  render() {
    const {number, count} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {number}</p>
          <button type="button" onClick={this.addRandomNumber}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
