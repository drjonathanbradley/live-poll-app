import React from 'react'

export default class Bar extends React.Component {
  render() {
    return (
      <div className='bar-container'>
        <h4>{this.props.value} votes</h4>
        <div
          key={'key' + this.props.value}
          style={{
            backgroundColor: this.props.value >= 250 ? '#CE0058' : '#ED8B00',
            width: '100%',
            height: this.props.value >= 250 ? 250 * 3 : this.props.value * 3,
          }}
          className='bar-reset'
        ></div>
        <h3>{this.props.item}</h3>
      </div>
    )
  }
}
