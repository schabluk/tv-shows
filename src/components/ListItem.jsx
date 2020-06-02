import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListItem({
  id,
  name,
  type,
  image,
  language,
  premiered,
  ...rest
}) {
  return (
    <li>
      <NavLink
        className="block hover:bg-gray-200 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
        activeClassName="bg-gray-300"
        to={`show/${id}`}>
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <div
                className="h-24 w-24 bg-cover"
                style={{
                  backgroundImage: `url(${image && image.medium})`
                }}
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <div className="leading-5 font-medium text-indigo-600 truncate">
                  {name}
                </div>
                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-sm leading-5 text-gray-900">
                    {premiered}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="m-2 flex-shrink-0 flex">
                  <span className="px-2">Type: </span>
                  <span className="px-2 inline-flex font-semibold bg-blue-100 text-blue-800">
                    {type}
                  </span>
                </div>
                <div className="m-2 flex-shrink-0 flex">
                  <span className="px-2">Language: </span>
                  <span className="px-2 inline-flex font-semibold bg-blue-100 text-blue-800">
                    {language}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </NavLink>
    </li>
  )
}
