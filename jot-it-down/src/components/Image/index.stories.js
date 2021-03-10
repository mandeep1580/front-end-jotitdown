import React from 'react'
import Image from './index'
import { actions } from '@storybook/addon-actions'


const fakeData = {
  imageId: "image1",
  imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  albumId: "album1",
  timeStamp :new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
}

export default {
  title: 'Image',
  component: Image,
}

const events = actions({onDelete: 'delete clicked', onClick: 'image clicked'})

export const Default = () => (
  <Image image={fakeData}{...events}></Image>
)