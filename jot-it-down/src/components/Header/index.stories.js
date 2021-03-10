
import React from 'react'
import { actions } from '@storybook/addon-actions'

import Header from './index'

export default {
  title: 'Header',
  component: Header,
}

const events = actions({ titleClicked: "title clicked", signOut: 'sign out', newPost: "new post", profile: "profile", onSearch: "search", login: "login"})

export const LoggedIn = () => (
  <Header 
  title="Jot It Down"
  {...events}
  user={true}
  ></Header>
)

export const LoggedOut = () => (
  <Header 
  title="Jot It Down"
  {...events}
  ></Header>
)
