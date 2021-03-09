import React from 'react'
import NoteDescription from './index'
import { actions } from '@storybook/addon-actions'

const desc = "blah blah blah"
export default {
  title: 'NoteDescription',
  component: NoteDescription,
}

// const events = actions({postButtonClicked: 'Post Button Clicked' })


export const Default = () => (
  <NoteDescription description = {desc} />
)

