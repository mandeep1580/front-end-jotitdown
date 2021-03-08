import React from 'react'
import ViewCollection from './index'
import { actions } from '@storybook/addon-actions'

const collectionType = {
    id: 1,
    type: "Notes"
}

export default {
  title: 'ViewCollection',
  component: ViewCollection,
}

const events = actions({ addClicked: "Add Button Clicked" })

// 4
export const Default = () => (
  <ViewCollection collection={collectionType} {...events}></ViewCollection>
)
