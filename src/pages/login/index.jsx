import React, { Component } from 'react';
import Inputs from './Components/Inputs'
import './index.scss';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: '登录1'
    }
  }

  render() {
    return (
      <>
        <h1 className="login">{this.state.pageName}</h1>
        eqweqw
        <Inputs />
      </>
    )
  }

}

export default Login