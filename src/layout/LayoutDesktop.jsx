import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

export default function LayoutDesktop({ movies }) {
  return (
    <div className="h-full flex-grow flex">
      <Sidebar items={movies} />
      {/* This element renders the element for the child route */}
      <Outlet />
    </div>
  )
}
