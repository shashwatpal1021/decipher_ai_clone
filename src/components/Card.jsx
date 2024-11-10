import React from 'react'

const Card = ({ icon, children, className }) => {
  return (
    <div className={`border-2 rounded-2xl m-5 p-10 h-[35vh] rounded-lg text-3xl font-[300] leading-[1.6] w-[35%] ${className}`}>
      <div>{children}</div>
      <div className='mt-10 font-bold text-6xl'>{icon}</div>
    </div>
  )
}

export default Card