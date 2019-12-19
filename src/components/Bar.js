import React from 'react'

export default class Bar extends React.Component {
  render() {
    return (
      <div className='bar-container'>
        <h3>{this.props.value} votes</h3>
        <div
          key={'key' + this.props.value}
          style={{
            backgroundColor: this.props.value >= 160 ? '#CE0058' : '#ED8B00',
            width: '100%',
            height: this.props.value >= 160 ? 160 * 3 : this.props.value * 3,
          }}
          className='bar-reset'
        ></div>
        <h4>{this.props.item}</h4>
      </div>
    )
  }
}
