import React, { Component } from 'react'

export default class ShowData extends Component {
  render() {
    let { result } = this.props
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    )
  }
}
