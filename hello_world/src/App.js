// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // What should the component render?
  render () {

    // Make sure to return some UI.
    return (
      <div>
      <h1>Hello {this.props.name}!</h1>
      <p>You are {this.props.age} years old.</p>
      <p>You love: {this.props.animals[0]}</p>
      </div>
    )
  }
}

export default Hello