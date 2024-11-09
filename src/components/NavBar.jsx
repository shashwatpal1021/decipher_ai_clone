import React from 'react'
import BigButton from './BigButton'
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='hover:cursor-pointer' src="https://framerusercontent.com/images/GgO8CQzR0FsccnMtj28zoXL1tuk.png?scale-down-to=512" alt="Decipher AI Logo" sizes='(max-width: 768px) 100vw, 50vw' width={"50%"} />
      </div>
      <div className='flex'>
        <div><BigButton onclick={onclick} title="Get Started" /></div>
        <div className='p-2 ml-2 text-5xl hover:cursor-pointer'><IoMdMenu /></div>
      </div>
    </div>
  )
}

export default NavBar