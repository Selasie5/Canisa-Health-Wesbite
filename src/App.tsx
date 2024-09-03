// import { useState } from 'react'
import "./App.css";
import FAQ from "./components/Home/FAQ";
import FeatureCard from "./components/Home/FeatureCard";

function App() {
  return (
    <main className=" space-y-[200px] md:space-y-[100px]">
      {/* Hero Section */}
      <section className="md:px-[96px]  h-screen py-[100px]">
        {/* Navbar */}
        <div>{/* <Navbar/> */}</div>

        <div className="flex flex-col justify-center items-center gap-[52px] text-center">
          {/* Hero */}
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <h1 className="text-black font-semibold text-[60px] leading-tight md:text-[64px] md:w-[638px] md:leading-[80px]">
              <span className="text-primary">Manage</span> Your Health with
              Confidence
            </h1>
            <p className=" text-[0.9rem]  md:text-[1.375rem] text-grey leading-[33px] md:w-[804px] font-[400]">
              Canisa Health provides tools and resources to track your blood
              pressure, understand your condition, and live a healthier life.
            </p>

            <button className="bg-primary text-white  px-[30px] py-[10px] text-[16px] rounded-full flex justify-center items-center gap-[10px]">
              Get App
              <span>
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
            </button>
          </div>
          <img src="/hero-img.png" alt="" className="w-[370px]" />
        </div>

        {/* Features */}
      </section>
      <section className=" flex flex-col justify-center items-center px-10 gap-[52px] py-[100px] md:px-[96px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className=" text-[40px] md:text-[40px] text-grey w-[500px] md:w-[726px] font-[700]">
            Personalized Chronic Care Management at your fingertips
          </h2>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-20">
          <FeatureCard
            src="/tracking.png"
            alt="comprehensive health tracking"
            title="Comprehensive Health Tracking"
            description="Track blood pressure, blood sugar, and cholesterol in one place to make informed decisions for a healthier you."
          />
          <FeatureCard
            src="/consultation.png"
            alt="Instant Consultations"
            title="Instant Consultations"
            description="Connect with a qualified doctor in real-time, no matter where you are. ."
          />
          <FeatureCard
            src="/medication-list.png"
            alt="know-your-meds"
            title="Know Your Meds"
            description="Search our extensive drug database for detailed medication information"
          />
          <FeatureCard
            src="/pharmacies.png"
            alt="locate-nearby-pharmacies"
            title="Locate Nearby Pharmacies "
            description="Streamline your healthcare experience and access the resources you need when you need them."
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 text-center px-10 md:px-[96px] ">
        <div>
          <img
            src="/samsung-prototype.svg"
            alt="canisa-mobile-app"
            className="w-[ 330.614px] h-[733.82px]"
          />
        </div>
        <div>
          <h2 className=" text-[40px] md:text-[64px] text-grey font-[700]">
            Build a <span className="text-primary">Healthier</span> You
          </h2>
          <p className="  text-[16px] md:text-[22px] md:w-[770px]">
            {" "}
            Manage Health effectively with Canisa Health. Track, monitor, and
            receive personalized advice to improve your quality of life.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10 text-center px-[96px] ">
        <div>
          <img
            src="/mobile-sim.png"
            alt="canisa-mobile-app"
            className="md:w-[ 230.614px] md:h-[633.82px]  w-[350px] h-[350px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="md:text-[64px] text-grey font-[700] text-[24px]">
            Track, Analyze, Take Control
          </h2>
          <p className=" text-[22px] w-[770px]">
            Empower yourself with Canisa Health. Track your vitals, analyze
            trends, and receive personalized advice. Take control of your health
            today.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10  px-[96px] ">
        <h2 className="text-black font-[500] text-[40px]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col justify-center items-center">
          <FAQ question="What is your name ?" answer="My name is Selasie" />
          <FAQ question="What is your name ?" answer="My name is Selasie" />
          <FAQ question="What is your name ?" answer="My name is Selasie" />
          <FAQ question="What is your name ?" answer="My name is Selasie" />
        </div>
        <div>
          <span className="text-grey/70 text-[18px]">
            Have more questions ?{" "}
            <span className="text-primary">Send us a mail</span>
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-[96px]  py-[69px] text-center gap-8 h-72 w-full bg-primary/20">
        <h2 className="text-[32px] font-[400] w-[947px]">
          Take the first step towards a healthier you. Download the Canisa
          Health app now and start tracking your progress.
        </h2>
        <button className="bg-primary text-white px-[40px] py-[17px] w-[921px] rounded-full">
          Download Canisa Health Today
        </button>
      </section>
    </main>
  );
}

export default App;
