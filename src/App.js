import React from 'react'
import { Header, Timer, Advert, Results, Question, Answers } from './components'
//import axios from 'axios'
import './semantic/semantic.min.css'
import './App.css'
import dataLoad from './data'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.next = () => {
      if (this.state.index === this.state.data.length - 1) {
        this.setState({
          index: 0,
        })
      } else {
        this.setState({
          index: this.state.index + 1,
        })
      }
    }

    this.next = this.next.bind(this)

    this.state = {
      data: dataLoad,
      index: 0,
      next: this.next,
    }
    // this.async = this.async.bind(this)
    // this.async()
  }

  update = index => {
    let newData = {
      ...this.state.data,
    }
    newData[this.state.index].results[index] =
      newData[this.state.index].results[index] + 1
    this.setState({
      newData,
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className='App'>
        <Header />
        <Timer next={this.state.next} />
        <Question question={this.state.data[this.state.index].question} />
        <Results
          results={this.state.data[this.state.index].results}
          answers={this.state.data[this.state.index].answers}
        />
        <Answers
          answers={this.state.data[this.state.index].answers}
          update={this.update}
        />
        <Advert />
      </div>
    )
  }
}
