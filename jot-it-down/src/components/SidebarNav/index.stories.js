
import React from 'react'
import { actions } from '@storybook/addon-actions'

import SidebarNav from './index'

export default {
  title: 'Sidebar',
  component: SidebarNav,
}


const events = actions({ onSubmit: 'submit', loginClick: "login" })

export const SideBar = () => (
  <SidebarNav 
  {...events}
  ></SidebarNav>
)
