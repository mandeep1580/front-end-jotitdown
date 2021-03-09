import React from 'react'
import NewNote from './index'
import { actions } from '@storybook/addon-actions'


export default {
  title: 'NewNote',
  component: NewNote,
}

const events = actions({postButtonClicked: 'Post Button Clicked' })


export const Default = () => (
  <NewNote {...events} />
)

