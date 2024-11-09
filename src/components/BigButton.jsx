import React from 'react'

const BigButton = ({ onclick, title }) => {
  return (
    <button className='text-2xl rounded-full border-2 border-blue-800 text-blue-800 hover:bg-white hover:text-red-400 hover:border-2  font-bold py-5 px-8 rounded' onClick={onclick}>{title}</button>
  )
}

export default BigButton