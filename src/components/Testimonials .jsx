
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq8-RG6mhrMLiziMwTd1Sv67GbJOi_VrY",
  authDomain: "composed-world-393911.firebaseapp.com",
  projectId: "composed-world-393911",
  storageBucket: "composed-world-393911.appspot.com",
  messagingSenderId: "690324972945",
  appId: "1:690324972945:web:d6c8b66ff2cffd3745e630",
  measurementId: "G-7PRP65ENKB",
};

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

const Testinomials = () => {
  const [data, setData] = useState([]);

  initializeApp(firebaseConfig);
  useEffect(() => {
    const db = getFirestore();
    const colRef = collection(db, "testimonials");
    getDocs(colRef)
      .then((review) => {
        const reviews = review.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setData(reviews.sort((a, b) => a.Order - b.Order));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // console.log(data)
  return (
    <section className="bg-[#f1f1f1] lg:mb-20 lg:mt-5 sm:my-0 lg:pb-10 lg:pt-10 sm:py-0">
      <div className="container mx-auto py-5 ">
        <div className="space-y-2 pt-10 font-[Poppins] font-black lg:text-4xl sm:text-3xl text-center">
          <h2>Testinomials</h2>
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
          })}
        </Carousel>
      </div>
    </section>
  );
};
export default Testinomials;
