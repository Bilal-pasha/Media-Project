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
};



const Testinomials = () => {
    const [data, setData] = useState([])
    initializeApp(firebaseConfig);
    useEffect(() => {

        const db = getFirestore()
        const colRef = collection(db, 'Testinomials')
        getDocs(colRef).then((snap) => {
            const images = snap.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setData(images.sort((a, b) => a.Order - b.Order));
        }).catch(err => {
            console.log(err.message)
        })
    }, [])
    console.log(data)
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
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((data, index) => {
                        return (
                            <>
                                <div className="px-5 py-8 bg-white mx-5 rounded-lg my-20" key={index}>
                                    <p>{data.Review}</p>
                                    <div className="flex justify-around py-5">
                                        <div>
                                            <h2 className="font-semibold">{data.ClientName}</h2>
                                            <p>{data.ClientOrganization}</p>
                                        </div>
                                        {/* <img src={data.imageUrl} alt="" /> */}
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
const sliderImageUrl = [
    //First image url
    {
        Review: "“The Creativess Studio has the ability to simplify complex problems into accessible and easy-to-use solutions. A must-have for any fast-growing team and product.",
        ClientName: "Colin Deblonde",
        ClientOrganization: "Co-Founder & CEO",
        // imageUrl: Client1 
    },
    {
        Review: "“The Creativess Studio has the ability to simplify complex problems into accessible and easy-to-use solutions. A must-have for any fast-growing team and product.",
        ClientName: "Colin Deblonde",
        ClientOrganization: "Co-Founder & CEO",
        // imageUrl: Client2 
    },
    {
        Review: "“The Creativess Studio has the ability to simplify complex problems into accessible and easy-to-use solutions. A must-have for any fast-growing team and product.",
        ClientName: "Colin Deblonde",
        ClientOrganization: "Co-Founder & CEO",
        // imageUrl: Client3 
    },
    {
        Review: "“The Creativess Studio has the ability to simplify complex problems into accessible and easy-to-use solutions. A must-have for any fast-growing team and product.",
        ClientName: "Colin Deblonde",
        ClientOrganization: "Co-Founder & CEO",
        // imageUrl: Client4 
    }, {
        Review: "“The Creativess Studio has the ability to simplify complex problems into accessible and easy-to-use solutions. A must-have for any fast-growing team and product.",
        ClientName: "Colin Deblonde",
        ClientOrganization: "Co-Founder & CEO",
        // imageUrl: Client1 
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1200, min: 768 },
        items: 2,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};