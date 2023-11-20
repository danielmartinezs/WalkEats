import React from 'react'

const Error = ({ msg }) => {
  return (
    <div className=' w-fit bg-red-200 p-4 mt-5 rounded-md'>
    <p className=' text-xl font-bold text-red-800'>{msg}</p>
    </div>
  )
}

export default Error