import React, {Component} from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: '登录'
        }
    }



    render() {
        return (
            <h1>{this.state.pageName}</h1>
        )
    }

}

export default Login