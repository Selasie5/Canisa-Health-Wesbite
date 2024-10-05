import { Link } from "react-router-dom"
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';


import { useState } from "react";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const mailerApiKey = import.meta.env.MAILER_KEY
  const ProductUpdateSubscription= async(values:any)=>
  {
    console.log( mailerApiKey);
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const response = await fetch("https://connect.mailerlite.com/api/subscribers",{
        method: "POST",
        headers:{
          "Content-Type" :"application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${mailerApiKey}`,
        },
        body: JSON.stringify({
          email: values.email,
          fields:{
            name: values.name
          },
          // groups:[""]
        })
      });
      if(response.ok){
        setSuccess("You have successfully sunscribed to the newsletter");
        console.log(response);
      }else{
        const errorData= await response.json();
        console.log(errorData)
        setError(errorData.message || "Something wnet wrong!");
      }
    } catch (err) {
      // 
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
      });

    const EssentialLinks:{id:number,
        tag: string,
        path: string,
    }[]=[
        {id: 1,
            tag: "Home",
            path: "/"
        },
        {
          id: 2,
            tag: "About Us",
            path: "/our-story"
        },
        {id: 3,
            tag: "Partner With Us",
            path: "/health-care-professionals"
        },
        {id: 4,
            tag: "Benefits",
            path: "/"
        },
        {id: 5,
            tag: "Features",
            path: "/"
        },
    ]
  return (
    <footer className="bg-primary text-white  p-10 flex flex-col justify-center  items-start md:items-center gap-10">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-20">
      <div className="flex flex-col justify-start items-start gap-8 md:w-1/3">
            <h5 className="text-xl font-medium">Essential Links</h5>
                {EssentialLinks.map((links)=>(
                    <Link key={links.id}  to={links.path} >
                        <span className="text-white font-medium">{links.tag}</span>
                        </Link>
                ))}
         </div>
         <div className="flex flex-col justify-between items-start gap-8 md:w-1/3">
            <h5 className="text-xl font-medium">Contact Us</h5>
                <div className="flex justify-between items-center gap-4">
<span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
</span>
<span>
    info@canisahealth.com
</span>
                </div>
                <div className="flex justify-between items-center gap-4">
<span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
</span>
<span>
+2338123450987
</span>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <Link to=" https://instagram.com/canisahealth">
                    <img src="/insta.svg" alt="instagram" className="w-6"/>
                    </Link>
                    <Link to="https://www.linkedin.com/company/canisa-health-ince">
                    <img src="/linkedin.svg" alt="facebook" className="w-5"/>
                    </Link>
                    <Link to="https://x.com/canisahealth
">
                    <img src="/x.jpeg" alt="twitter" className="w-7"/>
                    </Link>
                </div>
         </div> 

         <div className="bg-green-800/40 p-5 rounded-lg h-auto text-white md:w-3/5">
                <h4 className="text-xl">Be the first to receive our products update and other essential updates</h4>
                <div>
                <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // Handle form submission
              console.log(values);
              ProductUpdateSubscription(values);

              // Reset form fields
              resetForm();
            }}
          >
            {() => (
              <Form className="mt-10 w-full flex flex-col justify-center items-start gap-7">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <Field 
                    id="name"
                    name="name"
                    className="rounded-lg outline-none border border-white bg-transparent placeholder-white text-white px-5 py-3 w-full"
                     placeholder="Enter your first name"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <Field 
                    id="email"
                    name="email"
                    type="email"
                   placeholder="Enter your email address"
                    className=" placeholder-white bg-transparent  text-white rounded-lg outline-none border border-white px-5 py-3 w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                </div>
              
                <button 
                  type="submit" 
                  className="font-medium text-white bg-primary rounded-full px-10 py-3 w-full flex flex-col justify-center items-center"
                >
                  {loading ? (
                    "Loading.."
                  ): (
                    <p>Suscribe</p>
                  )}
                </button>
              </Form>
            )}
          </Formik>
                </div>
         </div>
      </div>
     <div className="flex justify-center items-center text-center">
        <span className="text-white font-light text-md md:text-lg">&copy; 2024 Canisa Health. All rights reserved</span>
     </div>
     {error}
     {success}
    </footer>
  )
}

export default Footer
