import React from 'react'

export default class Question extends React.Component {
  render() {
    return (
      <div className='question-container'>
        <h1>{this.props.question}</h1>
      </div>
    )
  }
}
