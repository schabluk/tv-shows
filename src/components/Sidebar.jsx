import React from 'react'
import NavItem from '../components/NavItem'

export default function Sidebar({ items = [] }) {
  return (
    <ul
      className="h-full flex-initial bg-gray-300"
      style={{ minWidth: '200px' }}>
      {items &&
        items.map(({ label, path }, key) => (
          <NavItem key={key} label={label} to={path} />
        ))}
    </ul>
  )
}
