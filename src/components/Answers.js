import React from 'react'
import { Button } from 'semantic-ui-react'

export default class Answers extends React.Component {
  render() {
    return (
      <div className='answers-container'>
        {this.props.answers.map((item, index) => {
          return (
            <Button
              key={item}
              size='massive'
              color='red'
              onClick={() => {
                this.props.update(index)
              }}
            >
              {item}
            </Button>
          )
        })}
      </div>
    )
  }
}
