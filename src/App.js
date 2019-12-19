import React from 'react'
import { Header, Timer, Advert, Results, Question, Answers } from './components'
import { Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios'
import './semantic/semantic.min.css'
import './App.css'
import config from './config.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.next = () => {
      this.send(this.state.data[this.state.index])
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
      data: [],
      index: 0,
      next: this.next,
      loading: true,
    }
    this.async = this.async.bind(this)
    this.process = this.process.bind(this)
    this.send = this.send.bind(this)
    this.async()
  }

  async = () => {
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['X-DreamFactory-Api-Key'] = config.key

    axios
      .get('https://api.vtlibraries.us/api/v2/poll_prod/_schema?fields=name')
      .then(response => {
        console.log(response)
        response.data.resource.map(item => {
          axios
            .get(config.url + item.name)
            .then(results => {
              if (results.data.resource[0].active) {
                let temp = this.state.data
                temp.push(this.process(results.data.resource[0], item.name))
                this.setState({
                  data: temp,
                  loading: false,
                })
              }
            })
            .catch(error => console.log(error))
        })
      })
  }

  process = (response, table) => {
    let newData = {}
    newData.question = response.question
    newData.table = table
    newData.answers = []
    newData.results = []
    for (let x = 1; x <= response.count; x++) {
      newData.answers.push(response['answer' + x])
    }
    for (let x = 1; x <= response.count; x++) {
      newData.results.push(response['value' + x])
    }
    return newData
  }

  send = toUpdate => {
    let newData = {
      id: 1,
    }

    toUpdate.results.map((item, index) => {
      newData['value' + (index + 1)] = item
    })

    axios
      .request(config.url + toUpdate.table, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-DreamFactory-Api-Key': config.key,
        },
        data: JSON.stringify({
          resource: [newData],
        }),
      })
      .then(results => {
        console.log(results.status)
      })
      .catch(error => console.log(error))
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
    //console.log(this.state)
    if (this.state.loading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )
    } else {
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
            results={this.state.data[this.state.index].results}
          />
          <Advert />
        </div>
      )
    }
  }
}
