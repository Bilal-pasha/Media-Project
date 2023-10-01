import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { initializeApp } from "firebase/app";
// import { getStorage, ref, listAll } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBq8-RG6mhrMLiziMwTd1Sv67GbJOi_VrY",
    authDomain: "composed-world-393911.firebaseapp.com",
    projectId: "composed-world-393911",
    storageBucket: "composed-world-393911.appspot.com",
    messagingSenderId: "690324972945",
    appId: "1:690324972945:web:d6c8b66ff2cffd3745e630",
    measurementId: "G-7PRP65ENKB"
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1200, min: 768 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const Testinomials = () => {
    const [data, setData] = useState([])

    initializeApp(firebaseConfig);
    useEffect(() => {
        const db = getFirestore()
        const colRef = collection(db, 'testimonials')
        getDocs(colRef).then((review) => {
            const reviews = review.docs.map((doc) => {
                // console.log(data)
                return { ...doc.data(), id: doc.id }
            })
            setData(reviews.sort((a, b) => a.Order - b.Order));
        }).catch(err => {
            console.log(err.message)
        })
    }, [])
    // console.log(data)
    return (

        <section className="bg-[#f1f1f1] lg:my-20">
            <div className="container mx-auto py-5 ">
                <div className="space-y-2 pt-10 font-[Poppins] font-black lg:text-4xl sm:text-3xl text-center">
                    <h2>
                        Testinomials
                    </h2>
                </div>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {data.map((data, index) => {
                        return (
                            <>
                                <div className="max-h-[40vh] px-5 py-8 bg-white mx-5 rounded-lg my-20" key={index}>
                                    <p>{data.Review}</p>
                                    <div className="flex justify-start py-5">
                                        <div>
                                            <h2 className="font-[Poppins] text-lg">{data.Client}</h2>
                                            <p className="">{data.ClientOrganization}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};
export default Testinomials;
