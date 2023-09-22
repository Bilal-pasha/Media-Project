import React from '@astrojs/react'
import { Fragment } from 'react'
import Moviebg from "../assets/videoBg.mp4"

export default function Movie() {
  return (
    <Fragment>
      <div className='w-full h-[80vh]'>
        <div className="absolute w-full h-[80%] top-13 left-0 bg-[rgba(0,0,0,0.5)]"></div>
        <video src={Moviebg} autoPlay loop muted className='w-full h-full object-cover' defer />
        <div className='absolute text-white font-[cursive] lg:text-5xl md:text-xl font-semibold w-full h-full flex flex-col justify-center items-center top-0'>
          <h2 className='border-white border-[0.5px] py-3 px-3 rounded-lg'>MAX Solutions <span className='text-skyblue'>Media Advisory EXperts</span></h2>
        </div>
      </div>
    </Fragment>
  )
}
