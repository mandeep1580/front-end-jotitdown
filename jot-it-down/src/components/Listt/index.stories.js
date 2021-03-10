import React from 'react'
import Listt from './index'
import { actions } from '@storybook/addon-actions'


const fakeData = {
  toDoId: "list1",
  toDoItem: "milk",
  toDoCollectionId: "listCollection1",
  completed: true,
  timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
}

export default {
  title: 'Listt',
  component: Listt,
}

const events = actions({onDelete: 'delete clicked', onEdit: 'Edit clicked', onChange: "CheckBox clicked"})

export const Default = () => (
  <Listt list={fakeData}{...events}></Listt>
)