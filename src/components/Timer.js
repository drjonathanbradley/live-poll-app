import React from 'react'
import { Progress } from 'semantic-ui-react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countdown: 30.0,
    }

    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    this.timer()
  }

  timer = () => {
    setInterval(() => {
      if (this.state.countdown <= 0) {
        this.props.next()
        this.setState({
          countdown: 30,
        })
      } else {
        this.setState({
          countdown: this.state.countdown - 0.1,
        })
      }
    }, 100)
  }

  render() {
    return (
      <div className='progress-container'>
        <Progress
          color='teal'
          value={this.state.countdown}
          total={30}
          size='big'
        ></Progress>
      </div>
    )
  }
}
