import React from 'react'
import { actions } from '@storybook/addon-actions'
import ImageView from './index'


const image = [ ]

export default {
  title: 'Image View',
  component: ImageView,
}

const events = actions({ onSubmit: 'submit',onDelete: 'delete clicked', onClick: 'Card clicked' })

export const WithImages = () => (
  <ImageView
  {...events} images={image}
  ></ImageView>
)