import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

export const Advert = props => {
  return (
    <Segment className='advert-container'>
      <Header as='h1' className='advert-text'>
        Stop by to talk with someone about your own data needs!
      </Header>
      <img src='logo.png' alt='VT Libraries Logo Lockup' />
      <Icon name='arrow left' size='massive' color='black' />
    </Segment>
  )
}
