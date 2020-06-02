import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const buttonClassName =
  'inline-block py-1 px-3 hover:bg-blue-400 bg-blue-300 text-white'

export default function LayoutMobile() {
  let navigate = useNavigate()
  let handleGoBack = () => navigate(-1)

  return (
    <div className="h-full flex-grow flex flex-col">
      <button className={buttonClassName} onClick={handleGoBack}>
        Go Back
      </button>
      {/* This element renders the element for the child route */}
      <Outlet />
    </div>
  )
}
