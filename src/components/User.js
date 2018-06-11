import React, { Component } from 'react'

export default class User extends Component {
  state = {
    present: false
  }

  toggle = () => {
    this.setState({ present: !this.state.present })
  }

  render(){
    return (
      <div>
        <p>User:<b> {this.props.name}</b></p>
        <p>{ this.state.present ? 'YEP!' : 'NOPE' }</p>
        <button onClick={this.toggle} > PRESENT! </button>
      </div>
    )
  }
}
