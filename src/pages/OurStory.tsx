import { Link } from "react-router-dom"
// import LogoCarousel from "../components/OurStory/LogoCarousel"
import PartnershipCard from "../components/OurStory/PartnershipCard"


const OurStory = () => {
  
  return (
    <main className="space-y-20">
        <section className=" px-6 py-10 h-auto bg-primary text-white flex flex-col justify-center items-center gap-10">
        <h1 className="text-[2.2rem] font-medium"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >Empowering health, connecting communities. We're bridging the gap to provide accessible, personalized healthcare for all.</h1>
        <div className="relative">
        <img src="our-story.png" alt="" className="w-[375px] rounded-lg"/>
        </div>
       <img src="/circle.png" alt="" className="hidden md:block rotating-object absolute top-[450px] left-[50px] w-[125px]" />
            </section> 

            <section className="flex flex-col justify-centter items-start gap-8 px-5">
                <span className="uppercase text-black font-[500]  text-lg border border-black  px-10 py-[0.5rem] rounded-full"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                >
                    Our Story
                </span>
                <p className="text-grey font-medium text-lg"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                >
                In Africa, chronic diseases like diabetes, hypertension, and asthma are on the rise, affecting millions of lives. We have witnessed loved ones struggling to manage their conditions, facing barriers in accessing quality care, and feeling isolated in their journeys. There is a deep communication problem due to broken health infrastructure leading to lack of personalized care. We are fixing this by building Canisa Health to ensure patients can feel the community around their care journey. 
                </p>
                <img src="/drugs.png" alt="drugs" className="w-full"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"/>
            </section>
            <section className="flex flex-col justify-center items-center gap-5">
  <h2 className="text-4xl font-[700]"
    data-aos="fade-in"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
  >
    We Are Supported By
  </h2>
  <div  className="grid grid-cols-2 md:grid-cols-4 gap-10 px-10 py-10">
    <img src="/db.png" alt="Ashesi D-Lab" className="w-[7rem]" />
    <img src="/3.png" alt="Ferring" className="w-[12rem]" />
    <img src="/Ford-Foundation.svg" alt="Merck" className="w-[7rem]" />
    <img src="/ii.jpeg" alt="Pfizer" className="w-[7rem]" />
  </div>
</section>

<section className="px-5 flex flex-col justify-center items-start gap-3">
  <div>
    <span className="text-green-900 text-lg font-medium rounded-full bg-primary/30 px-10 py-2 text-md"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      Opportunities
    </span>
  </div>
  <div className="flex flex-col  justify-center items-center gap-4">

  
  <div className="w-full ">
    <h3 className="text-4xl font-bold text-black">Partnership Opportunities With Canisa Health</h3>
  </div>
  <div className="carousel partnership-cards w-full  md:space-x-10 flex flex-col md:flex-row justify-center items-center gap-[1rem]">
    <PartnershipCard
      title="Co-Create Patient Education"
      description="Partner in developing engaging educational content within the Canisa Health app. Share your expertise, reach a wider audience, and establish yourself as a leader in Health management."
    />
    <PartnershipCard
      title="Community Outreach Together"
      description="Join forces on community initiatives. Organize events to raise awareness about Health and promote healthy lifestyles. Make a positive impact, gain brand exposure, and potentially attract new patients."
    />
    <PartnershipCard
      title="Data-Driven Research"
      description="Collaborate on research projects utilizing anonymized patient data. Advance scientific knowledge, develop new treatment approaches for African populations, and potentially co-author impactful publications."
    />
  </div>
  </div>
</section>


            <div className="flex flex-col justify-center items-center py-10">
              <button className="text-white bg-primary px-5 py-3 rounded-full"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              >
                <Link to="/contact-us" className="flex justify-center items-center gap-[0.75rem]">
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
