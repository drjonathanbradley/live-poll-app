import React from 'react'
import { Button } from 'semantic-ui-react'

export default class AnswerButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
    }
    this.fade = this.fade.bind(this)
  }

  fade = index => {
    this.setState(
      {
        disabled: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            disabled: false,
          })
        }, 2000)
      }
    )
  }

  render() {
    return (
      <Button
        key={this.props.text + this.props.value}
        size='massive'
        color='red'
        disabled={this.state.disabled}
        className='answer-button'
        onClick={() => {
          this.props.update(this.props.index)
          this.fade()
        }}
      >
        {this.props.text}
      </Button>
    )
  }
}
