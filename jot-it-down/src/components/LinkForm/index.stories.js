import React from 'react'
import { actions } from '@storybook/addon-actions'

import LinkForm from './index'

export default {
  title: 'Link Form',
  component: LinkForm,
}

const events = actions({ onSubmit: 'submit' })

export const Default = () => (
  <LinkForm
  {...events}
  ></LinkForm>
)