
import React from 'react'
import { actions } from '@storybook/addon-actions'

import Header from './index'

export default {
  title: 'Header',
  component: Header,
}

const events = actions({ 
  titleClicked: "title clicked", 
  logOutClicked: 'log out', 
  })

export const LoggedOut = () => (
  <Header 
  {...events}
  ></Header>
)

