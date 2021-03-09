
import React from 'react'
import { actions } from '@storybook/addon-actions'

import Login from './index'

export default {
  title: 'Login',
  component: Login,
}

const events = actions({ onSubmit: 'submit' })

export const Default = () => (
  <Login 
  {...events}
  ></Login>
)
