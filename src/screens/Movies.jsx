import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import useFetch from 'swr'
import ListItem from '../components/ListItem'

const commonStyle = 'h-full flex-auto flex'
const pendingStyle = `${commonStyle} flex justify-center items-center text-xl`

export default function MoviesContainer() {
  const { title } = useParams()

  const { data, error, isValidating } = useFetch(
    `https://api.tvmaze.com/search/shows?q=${title}`
  )

  if (error)
    return <div className={`${pendingStyle} bg-red-300`}>Failed to load.</div>

  if (!data || isValidating)
    return <div className={`${pendingStyle} bg-blue-300`}>Loading...</div>

  return (
    <div className={`${commonStyle} bg-white`}>
      <div className="flex-1 overflow-y-scroll">
        <ul>
          {data && data.map(({ show }) => <ListItem key={show.id} {...show} />)}
        </ul>
      </div>
      <Outlet />
    </div>
  )
}
