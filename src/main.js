import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './static/css/base.scss';

ReactDOM.render(<Router />, document.getElementById('root'))


if (module.hot) {
  module.hot.accept('./router', ()=>{
    const Router = require("./router").default;
    console.log('跟新了')
    ReactDOM.render(<Router />, document.getElementById('root'))
  })
}