// import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselSlider(props) {
  // console.log("X:", props.data);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // console.log(props.data);
  return (
    <>
      <Carousel
        ssr={true}
        responsive={responsive}
        // autoPlay={true}
        // swipeable={true}
        // draggable={true}
        showDots={false}
        // infinite={true}
        // partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        <>1</>
        {/* {props?.data?.map((data, index) => {
          return (
            <>
              <div
                className="flex flex-col justify-between py-10 my-10 bg-white mx-5 px-5  lg:h-[90%] sm:h-auto"
                key={index}
              >
                <p className="text-lg">{data.Review}</p>
                <div>
                  <h2 className="font-[Poppins] text-lg font-black">
                    {data.Client}
                  </h2>
                  <p className="">{data.ClientOrganization}</p>
                </div>
              </div>
            </>
          );
        })} */}
      </Carousel>
    </>
  );
}
