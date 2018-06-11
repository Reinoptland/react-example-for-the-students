import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
    hours: '17',
    minutes: '11',
    seconds: '01'
  }

  tick = () => {
    const date = new Date()
    const hours =  date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    console.log(hours, minutes, seconds)
    this.setState({
      hours,
      minutes,
      seconds
    })
  }

  componentDidMount(){
    setInterval(this.tick, 1000)
  }

  render(){
    const { hours, minutes, seconds } = this.state
    return(
      <h1 >
        <span style={{ color: 'blue'}}>{ hours }</span>
        :
        <span style={{ color: 'orange'}}>{ minutes }</span>
        :
        <span style={{ color: 'red'}}>{ seconds }</span>
      </h1>
    )
  }
}
