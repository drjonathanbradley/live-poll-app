import React from 'react'
import AnswerButton from './AnswerButton'

export default class Answers extends React.Component {
  render() {
    return (
      <div className='answers-container'>
        {this.props.answers.map((item, index) => {
          return (
            <AnswerButton
              key={item}
              text={item}
              value={this.props.results}
              index={index}
              update={this.props.update}
            />
          )
        })}
      </div>
    )
  }
}
