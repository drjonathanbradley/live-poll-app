import React from 'react'

export default class Bar extends React.Component {
  render() {
    return (
      <div className='bar-container'>
        <h4>{this.props.value} votes</h4>
        <div
          style={{
            backgroundColor: '#ED8B00',
            width: '100px',
            height: this.props.value,
          }}
        ></div>
        <h3>{this.props.item}</h3>
      </div>
    )
  }
}
