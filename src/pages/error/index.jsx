import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "error"
    };
  }

  method = async () => {
    await 1;
  };

  render() {
    this.method();
    return <h1>{this.state.pageName}</h1>;
  }
}

export default Login;
