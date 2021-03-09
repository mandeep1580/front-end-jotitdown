import React from 'react'
import NewCollection from './index'
import { actions } from '@storybook/addon-actions'


export default {
  title: 'NewCollection',
  component: NewCollection,
}

const events = actions({ postButtonClicked: 'Post Button Clicked' })


export const Default = () => (
  <NewCollection type="Notes" {...events} />
)

