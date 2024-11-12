import React from 'react'
import BigButton from './BigButton'
import Card from './Card'
import { FaDesktop } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

const Body = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center mt-[17vh]'> <div className='text-[2vw]  mr-2'>Backed by </div><img src="	https://framerusercontent.com/images/AG6R5X99jJQtHOhDNBqO7Gczl1w.svg?scale-down-to=512" alt="y-combinaton" width="50%" /></div>

      <div className="text-center text-[6.3vw] w-[80%] font-[550] mt-[2.5vh] text- tracking-[-2px] leading-[1]">
        The AI for Understanding Customer Behavior and Prioritizing Issue
      </div>

      <div className='text-[2.5vw] w-[80%] mt-[5vh] text-center text-gray-600 w-[65%]'>Our AI agent reviews session replays to interpret  customer and product behavior, helping your team prioritize issues, imporve the product, prevent churn.</div>
      <div className='mt-[5vh]'>
        <BigButton className='bg-blue-400 text-white h-[10vh] w-[12vw] text-2xl border-2 border-blue-400 :hover:cursor-pointer hover:bg-red-400 hover:text-white hover:text-3xl hover:border-2 hover:border-red-400' onclick={() => { }} title="Get Started" />
      </div>

      <div className="mt-[5vh] h-[75vh] w-[75%] overflow-hidden">
        <img
          className="rounded-tl-[40px] rounded-tr-[40px] object-cover object-top w-full"
          src="https://framerusercontent.com/images/M7XXVsoRlErNbJXoV3vGZlNoA.png"
          alt="main website image"
        />
      </div>

      <div className='flex justify-between mt-[5vh] w-[80%]'>
        <Card icon={<FaDesktop />} className={`bg-pink-400`}>Automatically find user impacting issues with our AI Session Replay</Card>
        <Card className={`bg-gray-100`} >Easily debug issues with frontend and backend logs, traces, errors</Card>
        <Card icon={<FaPeopleGroup />} className={`bg-blue-400`} >Quickly understand which customers are affected by what</Card>
      </div>

      <div className={`bg-gray-200 mt-[5vh] w-[80%] text-center text-3xl font-[500] leading-[1.6] rounded-lg p-10 h-[30vh] `}>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Body