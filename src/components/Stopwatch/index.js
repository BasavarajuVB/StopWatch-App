// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isRunning: false}

  resetTime = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0, minutes: 0})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false})
  }

  updateTime = () => {
    const {minutes, seconds, isRunning} = this.state
    if (seconds < 60) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    } else {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    }
  }

  startTimer = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isRunning: true})
  }

  render() {
    const {minutes, seconds} = this.state
    const secondsTime = seconds < 10 ? `0${seconds}` : seconds
    const minutesTime = minutes < 10 ? `0${minutes}` : minutes
    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-img-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{`${minutesTime}:${secondsTime}`}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.resetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
