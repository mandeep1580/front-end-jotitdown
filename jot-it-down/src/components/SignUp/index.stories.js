
import React from 'react'
import { actions } from '@storybook/addon-actions'

import SignUp from './index'

export default {
  title: 'Sign Up',
  component: SignUp,
}

const events = actions({ onSubmit: 'submit' })

export const Default = () => (
  <SignUp 
  {...events}
  ></SignUp>
)
