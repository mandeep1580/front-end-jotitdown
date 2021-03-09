import React from 'react'
import { actions } from '@storybook/addon-actions'

import ListForm from './index'

export default {
  title: 'List Form',
  component: ListForm,
}

const events = actions({ onSubmit: 'submit' })

export const Default = () => (
  <ListForm
  {...events}
  ></ListForm>
)