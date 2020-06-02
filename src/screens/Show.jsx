import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from 'swr'

const commonStyle = 'flex-1'
const pendingStyle = `${commonStyle} flex justify-center items-center text-xl`

export default function ShowContainer() {
  const { id } = useParams()

  const { data, error, isValidating } = useFetch(
    `https://api.tvmaze.com/shows/${id}`
  )

  if (error)
    return <div className={`${pendingStyle} bg-red-300`}>Failed to load.</div>

  if (!data || isValidating)
    return <div className={`${pendingStyle} bg-blue-300`}>Loading...</div>

  const { name, summary, image } = data

  return (
    <div className={`${commonStyle} bg-white`}>
      <div className="w-full h-full overflow-hidden bg-gray-100 flex flex-col">
        <div
          className="w-full bg-contain bg-top"
          style={{
            minHeight: '300px',
            backgroundImage: `url(${image && image.original})`
          }}
        />
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-3xl mb-2">{name}</div>
          <div
            className="text-gray-700 text-xl"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      </div>
    </div>
  )
}
