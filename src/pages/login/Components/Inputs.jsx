import React, { Component } from 'react'

import styled from './input.module.css'

class Inputs extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <input name='account' className={styled.input}></input>
    )
  }
}

export default Inputs