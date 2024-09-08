import { Link } from "react-router-dom"
import LogoCarousel from "../components/OurStory/LogoCarousel"


const OurStory = () => {
  
  return (
    <main className="space-y-20">
        <section className=" px-6 py-10 h-auto bg-primary text-white flex flex-col justify-center items-center gap-10">
        <h1 className="text-[2.2rem] font-medium">Empowering health, connecting communities. We're bridging the gap to provide accessible, personalized healthcare for all.</h1>
        <div className="relative">
        <img src="our-story.png" alt="" className="w-[375px]"/>
        </div>
       <img src="/circle.png" alt="" className="rotating-object absolute top-[450px] left-[50px] w-[125px]" />
            </section> 

            <section className="flex flex-col justify-centter items-start gap-8 px-5">
                <span className="uppercase text-black font-[500]  text-lg border border-black  px-10 py-[0.5rem] rounded-full">
                    Our Story
                </span>
                <p className="text-grey font-medium text-lg">
                In Africa, chronic diseases like diabetes, hypertension, and asthma are on the rise, affecting millions of lives. We have witnessed loved ones struggling to manage their conditions, facing barriers in accessing quality care, and feeling isolated in their journeys. There is a deep communication problem due to broken health infrastructure leading to lack of personalized care. We are fixing this by building Canisa Health to ensure patients can feel the community around their care journey. 
                </p>
                <img src="/drugs.png" alt="drugs" className="w-full"/>
            </section>
            <section className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-4xl font-[700]">Our Partners</h2>
               <LogoCarousel/>
            </section>
            <section className=" px-5 flex flex-col justify-center items-start gap-3">
              <div>
                <span className="text-green-900 text-lg font-medium rounded-full bg-primary/30 px-10 py-2 text-md">Opportunities</span>
              </div>
              <div className="">
             {/* Sliding Content */}

              </div>
            </section>

            <div className="flex flex-col justify-center items-center">
              <button className="text-white bg-primary px-5 py-3 rounded-full">
                <Link to="/" className="flex justify-center items-center gap-[0.75rem]">
                <span>
                Become a partner
                </span>
               
                <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
                </Link>
              </button>
            </div>
        
    </main>
  )
}

export default OurStory