import React from 'react'
import { Link } from 'react-router-dom'

export const LinkStyle = 'text-indigo-200 hover:text-white'

export default function Navigation() {
  return (
    <nav className="bg-indigo-900 p-4">
      <ul className="flex">
        <li className="mr-6">
          <Link className={LinkStyle} to="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className={LinkStyle} to="/movies">
            Movies
          </Link>
        </li>
        <li className="mr-6">
          <Link className={LinkStyle} to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  )
}
