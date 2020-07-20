import React, { Component } from 'react';
import Inputs from './Components/Inputs'
import './index.scss';
import { hot } from 'react-hot-loader/root';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: '登录1',
      timer: 0,
      step: 1
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + this.state.step
      })
    }, 1000)
    this.setState({
      pageName: 'hello'
    })
  }

  render() {
    const {timer} = this.state;
    return (
      <>
        <h1 className="login">{this.state.pageName}</h1>
        <a>你</a>
        <Inputs />
        <h1>{timer}</h1>
      </>
    )
  }

}

export default hot(Login)