import React, { PureComponent } from 'react'

export default class LightSwitch extends PureComponent {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    console.log('RENDER WAS CALLED');
    return (<div>
      <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}
