import { Link } from "react-router-dom";
import FeatureCard from "../components/Home/FeatureCard";
import FAQ from "../components/Home/FAQ";



const Home = () => {

  const Features = [
    {
      id: 1,
      src: "./tracking.png",
      alt: "comprehensive health tracking",
      title: "Comprehensive Health Tracking",
      description:
        "Track blood pressure, blood sugar, and cholesterol in one place to make informed decisions for a healthier you.",
    },
    {
      id: 2,
      src: "./consultation.png",
      alt: "Instant Consultations",
      title: "Instant Consultations",
      description:
        "Connect with a qualified doctor in real-time, no matter where you are. ",
    },
    {
      id: 3,
      src: "./medication-list.png",
      alt: "know your meds",
      title: "Know Your Meds",
      description:
        "Search our extensive drug database for detailed medication information,",
    },
    {
      id: 4,
      src: "./tracking.png",
      alt: "locate nearby pharmacies",
      title: "Locate Nearby Pharmacies",
      description:
        "Streamline your healthcare experience and access the resources you need when you need them.",
    },
  ];

  const FAQS = [
    {
      id: 1,
      question: "What is Canisa Health?",
      answer: "Canisa Health is a comprehensive healthcare platform that offers tools and resources to manage and monitor your health, including tracking vital signs, accessing consultations, and finding medication information.",
    },
    {
      id: 2,
      question: "How do I track my health with Canisa Health?",
      answer: "You can track various health metrics like blood pressure, blood sugar, and cholesterol through the Canisa Health app. The platform provides detailed insights and trends to help you manage your health effectively.",
    },
    {
      id: 3,
      question: "Is Canisa Health available on mobile devices?",
      answer: "Yes, Canisa Health is available as a mobile app on both iOS and Android devices, allowing you to manage your health on the go.",
    },
    {
      id: 4,
      question: "How can I consult with a doctor using Canisa Health?",
      answer: "You can connect with a qualified doctor through the app for real-time consultations. Simply select the 'Consultation' feature, and you'll be guided through the process to speak with a doctor.",
    },
    {
      id: 5,
      question: "Is my personal health data secure on Canisa Health?",
      answer: "Yes, your personal health data is protected with advanced security measures, including encryption and secure data storage. Canisa Health prioritizes your privacy and complies with all relevant regulations.",
    },
    // {
    //   id: 6,
    //   question: "Can I find nearby pharmacies using Canisa Health?",
    //   answer: "Yes, Canisa Health provides a feature that allows you to locate nearby pharmacies based on your current location. This helps you access medications and other healthcare products quickly.",
    // },
    // {
    //   id: 7,
    //   question: "Does Canisa Health offer medication reminders?",
    //   answer: "Yes, the Canisa Health app includes a medication reminder feature that allows you to set alerts for taking your medications on time. This helps you stay on track with your prescribed treatments.",
    // },
    // {
    //   id: 8,
    //   question: "How do I get started with Canisa Health?",
    //   answer: "To get started, download the Canisa Health app from the App Store or Google Play, create an account, and begin exploring the features to manage your health effectively.",
    // },
    // {
    //   id: 9,
    //   question: "Is Canisa Health free to use?",
    //   answer: "Canisa Health offers both free and premium features. You can access basic health tracking and consultation features for free, while advanced features may require a subscription.",
    // },
    // {
    //   id: 10,
    //   question: "How can I contact Canisa Health support?",
    //   answer: "You can contact Canisa Health support through the app or website by navigating to the 'Support' section. Here, you can find various ways to reach out, including email and live chat options.",
    // },
  ];
  
  return (
    <main className="space-y-36">
      {/* Hero Section */}
      <section className="hero-section px-5  md:px-10  py-20  flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="text-[32px] md:text-[4.25rem] font-[600] leading-normal w-full md:leading-[5.5rem] md:w-3/5"
         data-aos="fade-in"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false">
          <span className=" text-primary">Manage</span> Your{" "}
          <span className="text-primary">Health</span> With Confidence
        </h1>
        <p className="md:w-3/5 text-sm md:text-xl text-grey"
         data-aos="fade-in"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >
          Canisa Health provides tools and resources to track your blood
          pressure, understand your condition, and live a healthier life.
        </p>
        <button className="bg-primary text-white font-medium text-md px-10 py-4 rounded-full mt-5"
         data-aos="fade-in"
         data-aos-duration="2500"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >
          <Link
            to="/login"
            className=" flex justify-center items-center gap-[0.75rem]"
          >
            <span>Get App</span>

            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/1000/svg"
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
        <div className="mt-10"
         data-aos="fade-in"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         >
          <img src="/hero-img.png" alt="" className="md:w-[450px]" />
        </div>
      </section>
      <section  id="features" className="flex flex-col justify-center items-center gap-4">
        <h2 className=" text-[28px] md:text-3xl text-center font-[700]"
         data-aos="fade-in"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >
          Personalized Chronic Care Management at your fingertips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 md:gap-10 20"
         data-aos="zoom-in"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >
          {Features.map((feature) => (
            <FeatureCard
              key={feature.id}
              src={feature.src}
              alt={feature.alt}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
         
      </section>
      <section className="flex flex-col justify-center items-center gap-4 px-10 text-center">
        <img src="./samsung-prototype.png" alt="Mobile UI" className="w-[250px] md:w-[300px]" 
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        />
        <h2 className="font-[700] text-black text-4xl md:text-[3.5rem]"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >Build a <span className="text-primary">
        Healthier </span> You</h2>
        <p className="text-grey font-medium md:text-xl md:w-3/5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        > Manage Health effectively with Canisa Health. Track, monitor, and receive personalized advice to improve your quality of life.</p>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 px-10 text-center">
        <img src="./mobile-sim.png" alt="Mobile UI" className="scale-[1.25] md:w-[600px]"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        />
        <h2 className="font-[700] text-black text-4xl mt-[36px] md:text-[3.5rem]"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >Track, Analyze, Take Control
       </h2>
        <p className="text-grey font-medium md:text-xl md:w-3/5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"> Empower yourself with Canisa Health. Track your vitals, analyze trends, and receive personalized advice. Take control of your health today.</p>
      </section>

      <section className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-[700] md:text-4xl text-center px-3"
         data-aos="fade-in"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
        >Frequently Asked Questions</h2>
{FAQS.map((faq)=>(
    <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
))}
      </section>

      <section className="bg-primary/40 h-auto p-10  text-center flex flex-col justify-center items-center gap-4 w-full">
<span className=" text-sm md:text-2xl  leading-normal md:leading-9 md:w-3/5"
 data-aos="fade-in"
 data-aos-duration="1000"
 data-aos-easing="ease-in-out"
 data-aos-mirror="true"
 data-aos-once="false"
>Take the first step towards a healthier you. Download the Canisa Health app now and start tracking your progress.</span>
<button className=" text-xs md:text-lg font-medium text-white px-5  md:px-20 py-4 rounded-full bg-primary" data-aos="fade-in"
 data-aos-duration="1000"
 data-aos-easing="ease-in-out"
 data-aos-mirror="true"
 data-aos-once="false">
    <Link to="/download">
    Download Canisa Health Today
    </Link>
</button>
      </section>
    </main>
  );
};

export default Home;
