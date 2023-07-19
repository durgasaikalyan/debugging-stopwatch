import React, {Component} from 'react'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  intervalId = null

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    if (!this.state.isTimerRunning) {
      this.intervalId = setInterval(this.updateTime, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    return minutes < 10 ? `0${minutes}` : minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = timeElapsedInSeconds % 60

    return seconds < 10 ? `0${seconds}` : seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div>
        <h1>Stopwatch</h1>
        <button type="button" onClick={this.onStartTimer}>
          Start
        </button>
        <button type="button" onClick={this.onStopTimer}>
          Stop
        </button>
        <button type="button" onClick={this.onResetTimer}>
          Reset
        </button>
        <h1>{time}</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
        />
      </div>
    )
  }
}

export default Stopwatch
