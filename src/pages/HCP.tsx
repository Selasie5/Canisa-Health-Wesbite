import { Link } from "react-router-dom"

const HCP = () => {
  const Benefits=[
    {
      id:1,
      src:"/healthcare-solid.svg",
      title:"Provide excepentional patient care",
      subTitle:"Offer personalized attention, timely advice, and effective treatments to improve patient outcomes."

    },
    {
      id:2,
      src:"/briefcase.svg",
      title:"Maximize your efficiency",
      subTitle:"Streamline your workflow with our user-friendly platform, saving you time and effort."

    },
    {
      id:3,
      src:"/money.svg",
      title:"Make extra earnings",
      subTitle:"Offer additional services or products through our platform to increase your revenue."

    },
    
  ]
  return (
    <main className="space-y-20">
      <section className="bg-cover bg-center hcp-hero bg-[url('/hero-img-1.png')] h-screen flex flex-col justify-center items-start p-4 md:p-20 gap-4 ">
        <h1 className="text-white font-[600] text-5xl md:text-6xl md:w-3/5">Empower Patients, Advance Your Practice</h1>
        <p className="text-white font-normal text-lg">Connect with patients, streamline your workflow, and make a meaningful impact.</p>
        <button className="bg-primary px-10 py-3 text-white rounded-full">
          <Link to="/">
          Get Started
          </Link>
        </button>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 p-10">
        <h2 className="text-grey text-4xl text-center font-[700]">Empower Your Practice With Canisa Health</h2>
        <img src="/2.png" alt="" className="w-[650px]"/>
      </section>
     
      <section className="flex flex-col justify-center items-center gap-4 p-10">
        <h2 className="text-grey text-4xl text-center font-[700]">Secure Messaging</h2>
        <p className="text-[1.25rem] text-grey font-medium text-center">Communicate securely with your patients, ensuring privacy and confidentiality.</p>
      </section>
     

    
      <div className="flex flex-col md:flex-row gap-10">
      <div className="pr-5">
      <img src="/tab-mockup-1.png" alt="" className="w-[650px]"/>
      </div>
      <section className="flex flex-col justify-center items-center gap-4 p-10">
        <h2 className="text-grey text-4xl md:text-5xl text-center font-[700]">Electronic Health Records(EHR)</h2>
        <p className="text-[1.25rem] text-grey font-medium text-center">Manage patient records efficiently and securely.</p>
      </section>
      </div>
     <div className="flex flex-col md:flex-row-reverse">
      <div className="pl-5">
      <img src="/tab-mockup-2.png" alt="" className="w-[650px]"/>
      </div>
      <section className="flex flex-col justify-center items-center gap-4 p-10">
        <h2 className="text-grey text-4xl md:text-5xl text-center font-[700]">Telehealth Integration</h2>
        <p className="text-[1.25rem] text-grey font-medium text-center">Offer virtual consultations to improve patient access and convenience.</p>
      </section>
      </div>
      <section className="flex flex-col justify-center items-center gap-10 p-5">
        <h2 className="text-grey text-4xl md:text-5xl md:w-3/5 text-center font-[700]">Empower Your Practice With Canisa Health</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="md:w-1/2">
          <img src="/professional.png" alt="health professional" className="w-[350px] hidden md:block"/>
          </div>
      
       <div className=" w-full md:w-1/2 flex flex-col justify-center items-start gap-10">
{Benefits.map((benefit)=>
(
  <div className=" flex  justify-center items-start gap-5" key={benefit.id}>
     <img src={benefit.src} alt="" className="w-[40px]"/>
    <div className="flex flex-col justify-start items-start gap-2">
     
      <h3 className="text-black text-[1.25rem] font-bold">{benefit.title}</h3>
      <p className="text-grey font-medium text-[1.1rem]">{benefit.subTitle}</p>
    </div>
   
    </div>
))}
</div>
</div>
      </section>
      <section className="bg-primary/40 h-auto p-10  text-center flex flex-col justify-center items-center gap-4">
<span className="text-2xl leading-9 md:w-3/5">Elevate your practice and transform patient care. Sign up now to experience the future of healthcare.</span>
<button className="font-medium text-white px-20 py-4 rounded-full bg-primary">
    <Link to="/download">
    Join Canisa Health Today
    </Link>
</button>
      </section>
    </main>
  )
}

export default HCP
