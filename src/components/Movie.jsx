import React from '@astrojs/react'
import { Fragment } from 'react'
import Moviebg from "../assets/videoBg.mp4"

export default function Movie() {
  return (
    <Fragment>
      <div className='relative w-full lg:h-[80vh] md:h-[60vh] sm:h-[50vh]'>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        <video autoPlay={true} loop={true} muted={true} playsInline={true} className='absolute top-0 w-full h-full object-cover '  >
          <source src={Moviebg} type="video/mp4"/>
        </video>
        <div className='absolute text-white font-base w-full h-full flex flex-col justify-center lg:top-0 lg:left-0 lg:px-[100px] sm:px-[50px] max-w-[100%] space-y-5 bg-semiblack h-[40vh]'>
          <div className='max-w-[40rem] space-y-2'>
            <p className="lg:text-base sm:text-xs">Welcome to Max Solution</p>
            <h2 className='lg:text-3xl md:text-2xl sm:text-xl '><span className='text-blue'>M</span>edia <span className='text-blue'>A</span> dvisory E<span className='text-blue'>X</span> perts</h2>
            <p className='lg:text-xl sm:text-xs'> Media Advisory Experts is an innovative media advisory company offering strategic
              communications
              ,
              network television
              -
              level
              video production and targeted media and
              journalism training to corporate, government
              and individual clients across the United
              States and internationally</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
