import React from 'react'
import LinkView from './index'
import { actions } from '@storybook/addon-actions'

const link = [{
    linkId: "link1",
    linkUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    linkCollectionId: "linkCollection1",
    timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
  },
  {
    linkId: "link2",
    linkUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    linkCollectionId: "linkCollection1",
    timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
  }]
const events = actions({ submitComment: 'Submit Link', deleteLink: 'delete clicked' })

export default {
  title: 'Link View',
  component: LinkView,
}

export const WithComments = () => (
  <LinkView {...events} post={link} />
)
