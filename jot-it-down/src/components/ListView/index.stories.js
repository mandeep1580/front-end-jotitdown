import React from 'react'
import { actions } from '@storybook/addon-actions'
import ListView from './index'


const link = [{
  toDoId: "list1",
  toDoItem: "milk",
  toDoCollectionId: "listCollection1",
  completed: true,
  timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
},
{
  toDoId: "list1",
  toDoItem: "tea",
  toDoCollectionId: "listCollection1",
  completed: true,
  timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
}]

export default {
  title: 'List View',
  component: ListView,
}

const events = actions({ onSubmit: 'submit',onDelete: 'delete clicked', onEdit: 'Edit clicked', onChange: "CheckBox clicked" })

export const Default = () => (
  <ListView
  {...events} post={link}
  ></ListView>
)