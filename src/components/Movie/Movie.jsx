// import React from "@astrojs/react";
import { Fragment, useEffect, useState } from "react";
import Moviebg from "../../assets/videoBg.mp4";
import "./global.css";

export default function Movie() {
  return (
    <Fragment>
      <div className="relative w-full lg:h-[60vh] md:h-[60vh] sm:h-[50vh]">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 w-full h-full object-cover "
        >
          <source src={Moviebg} type="video/mp4" />
        </video>
        <div className="absolute text-white font-base justify-end items-center lg:py-20 sm:py-16 w-full h-full flex flex-col lg:top-0 lg:left-0 lg:px-[100px] sm:px-[50px] max-w-[100%] lg:space-y-5 sm:space-y-2 bg-semiblack">
          <p className="lg:text-5xl sm:text-3xl sm:text-center border-t-2 border-[#c3c3c3] pt-10 font-[Poppins] font-black duration-[10ms] animated fadeInDown">
            Welcome to <br />
            MEDIA ADVISORY <span className="text-blue">EXPERTS</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
