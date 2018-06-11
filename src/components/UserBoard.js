import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  state = [
    'SuperUSER',
    'Another',
    'Someone else'
  ]

  render(){
    return (
      <div>
        <h3>USER BOARD</h3>
        { this.state.map(username => <User name={username}/>)}
      </div>
    )
  }
}
