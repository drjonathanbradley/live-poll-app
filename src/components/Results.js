import React from 'react'
import Bar from './Bar'

export default class Results extends React.Component {
  render() {
    return (
      <div className='results-container'>
        {this.props.answers.map((item, index) => {
          return (
            <Bar key={item} item={item} value={this.props.results[index]} />
          )
        })}
      </div>
    )
  }
}
