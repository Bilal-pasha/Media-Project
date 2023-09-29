// import React from "@astrojs/react";
import { Fragment, useEffect, useState } from "react";
import Moviebg from "../assets/videoBg.mp4";
// import { useState, useEffect } from "@astrojs/react";

export default function Movie() {
  const [text, setText] = useState(" ");
  const [text2, setText2] = useState("");
  let [currentIndex, setCurrentIndex] = useState(0);
  let [currentIndex2, setCurrentIndex2] = useState(0);
  const typingSpeed = 80; // Adjust the typing speed (milliseconds per character)
  const headingText = "Welcome to";
  const headingText2 = "MEDIA ADVISORY EXPERTS";

  useEffect(() => {
    if (currentIndex < headingText.length) {
      const timer = setTimeout(() => {
        setText((prevText) => prevText + headingText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    if (
      currentIndex >= headingText.length &&
      currentIndex2 < headingText2.length
    ) {
      const timer = setTimeout(() => {
        setText2((prevText) => prevText + headingText2[currentIndex2]);
        setCurrentIndex2(currentIndex2 + 1);
        if (currentIndex2 >= headingText2.length - 1) {
          setTimeout(() => {
            setText("");
            setText2("");
            setCurrentIndex(0);
            setCurrentIndex2(0);
          }, 2000);
        }
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentIndex2]);
  // console.log("hello");
  return (
    <Fragment>
      <div className="relative w-full lg:h-[80vh] md:h-[60vh] sm:h-[50vh]">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div> */}
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 w-full h-full object-cover "
        >
          <source src={Moviebg} type="video/mp4" />
        </video>
        <div className="absolute text-white font-base justify-end items-center lg:py-20 sm:py-16 w-full h-full flex flex-col lg:top-0 lg:left-0 lg:px-[100px] sm:px-[50px] max-w-[100%] lg:space-y-5 sm:space-y-2">
          <p className="lg:text-3xl sm:text-xl font-[Poppins] font-black">
            {text}
          </p>
          <p className="lg:text-5xl sm:text-3xl sm:text-center font-[Poppins] font-black">
            {text2}
          </p>
        </div>
        {/* <div className="max-w-[40rem] space-y-2">
            <p className="lg:text-2xl md:text-xl sm:text-base">
              Welcome to Max Solution
            </p>
            <h2 className="lg:text-5xl md:text-3xl sm:text-2xl ">
              <span className="text-blue font-semibold">M</span>edia{" "}
              <span className="text-blue font-semibold">A</span>dvisory E
              <span className="text-blue font-semibold">X</span>perts
            </h2>
            <p className="lg:text-xl sm:text-sm">
              {" "}
              Media Advisory Experts is an innovative media advisory company
              offering strategic communications , network television - level
              video production and targeted media and journalism training to
              corporate, government and individual clients across the United
              States and internationally
            </p>
          </div> */}
      </div>
    </Fragment>
  );
}
