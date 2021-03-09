import React from 'react'
import { actions } from '@storybook/addon-actions'

import LinkView from './index'

export default {
  title: 'Link View',
  component: LinkView,
}

const events = actions({ onSubmit: 'submit' })

export const Default = () => (
  <LinkView
  {...events}
  ></LinkView>
)