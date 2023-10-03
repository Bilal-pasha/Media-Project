// import React from "@astrojs/react";
import { Fragment, useEffect, useState } from "react";
import Moviebg from "../../assets/videoBg.mp4";
import "./global.css";
// import { useState, useEffect } from "@astrojs/react";

export default function Movie() {
  // const [text, setText] = useState("");
  // const [text2, setText2] = useState("");
  // let [currentIndex, setCurrentIndex] = useState(0);
  // let [currentIndex2, setCurrentIndex2] = useState(0);
  // const typingSpeed = 80; // Adjust the typing speed (milliseconds per character)
  // const headingText = "";
  // const headingText2 = "";

  // useEffect(() => {
  //   if (currentIndex < headingText.length) {
  //     const timer = setTimeout(() => {
  //       setText((prevText) => prevText + headingText[currentIndex]);
  //       setCurrentIndex(currentIndex + 1);
  //     }, typingSpeed);
  //     return () => clearTimeout(timer);
  //   }

  //   if (
  //     currentIndex >= headingText.length &&
  //     currentIndex2 < headingText2.length
  //   ) {
  //     const timer = setTimeout(() => {
  //       setText2((prevText) => prevText + headingText2[currentIndex2]);
  //       setCurrentIndex2(currentIndex2 + 1);
  //       if (currentIndex2 >= headingText2.length - 1) {
  //         setTimeout(() => {
  //           setText("");
  //           setText2("");
  //           setCurrentIndex(0);
  //           setCurrentIndex2(0);
  //         }, 2000);
  //       }
  //     }, typingSpeed);
  //     return () => clearTimeout(timer);
  //   }
  // }, [currentIndex, currentIndex2]);
  // console.log("hello");
  return (
    <Fragment>
      <div className="relative w-full lg:h-[80vh] md:h-[60vh] sm:h-[50vh]">
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
          {/* <p className="lg:text-3xl sm:text-xl font-[Poppins] font-black"></p> */}
          <p className="lg:text-5xl sm:text-3xl sm:text-center font-[Poppins] font-black duration-[10ms] animated fadeInDown">
            <span className="text-blue "> Welcome to </span> <br />
            MEDIA ADVISORY EXPERTS
          </p>
        </div>
      </div>
    </Fragment>
  );
}
