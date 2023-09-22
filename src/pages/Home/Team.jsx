import { initializeApp } from "firebase/app";
// import { getStorage, ref, listAll } from "firebase/storage";
import { useState, useEffect } from 'react'
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
export default function Team() {
    const [data, setData] = useState([])
    initializeApp(firebaseConfig);
    useEffect(() => {

        const db = getFirestore()
        const colRef = collection(db, 'images')
        getDocs(colRef).then((snap) => {
            const images = snap.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setData(images)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])
    console.log(data)
    return (
        <section>
            <div>
                <div className="flex flex-wrap justify-center text-center container mx-auto space-y-10">
                    <h2 className="text-3xl">Our <span className="text-blue  border-blue border-b-[1px]">Team</span></h2>
                    <p className="text-lg">In our thirty-plus years of brand journalism, we’ve met a few people and told a few stories. In fact, somewhere in the neighborhood of 20,000 stories, reaching tens of millions of people worldwide.</p>
                </div>
                <div className="flex flex-wrap justify-evenly py-20 container mx-auto max-w-[70rem]	">
                    {data.map((value) => (
                        <div className="w-[250px] overflow-hidden shadow-xl lg:my-5 sm:my-10  cursor-pointer hover:scale-[1.1] ease-in-out transition-all duration-[1000ms]">
                            <img src={value.Url} alt="Our team" className="rounded-lg w-[250px] h-[250px] rounded-full  " />
                            <div className="flex flex-col justify-center text-center items-center py-5 space-y-2">
                                <h2 className="text-base text-blue font-normal">{value.Name}</h2>
                                <p className="font-medium text-sm">{value.Designation}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}   