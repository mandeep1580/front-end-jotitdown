
import React from 'react'
import { actions } from '@storybook/addon-actions'

import SignUp from './index'

export default {
  title: 'Sign Up',
  component: SignUp,
}

const events = actions({ onSubmit: 'submit', loginClick: "login" })

export const Signup = () => (
  <SignUp 
  {...events}
  ></SignUp>
)
