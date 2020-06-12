import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: '用户'
    }
  }

  render() {
    return (
      <h1>{this.state.pageName}</h1>
    )
  }
}

export default User