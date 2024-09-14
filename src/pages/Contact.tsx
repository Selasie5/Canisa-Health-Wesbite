import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FAQ from '../components/Home/FAQ';
import emailjs from 'emailjs-com';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";




const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string()
});

const Contact = () => {


  const [loading, setLoading] = useState<boolean>(false);


  const sendEmail = (values:any) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_phone: values.phone,
      message: values.message,
      to_name: 'Canisa Health Team'
    };
    setLoading(true);
    emailjs.send('service_al1hqby', 'template_k8dyakv', templateParams, 'UQFOJ-EiMs3pIyj-S')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Toastify({
          text: "Your message has been successfully submitted. We will be in toucn with you shortly.",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          // onClick: function(){} // Callback after click
        }).showToast();
        setLoading(false);
        // alert('Message sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Message failed to send.');
      });
  };
  
  
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
    {
      id: 6,
      question: "Can I find nearby pharmacies using Canisa Health?",
      answer: "Yes, Canisa Health provides a feature that allows you to locate nearby pharmacies based on your current location. This helps you access medications and other healthcare products quickly.",
    },
    {
      id: 7,
      question: "Does Canisa Health offer medication reminders?",
      answer: "Yes, the Canisa Health app includes a medication reminder feature that allows you to set alerts for taking your medications on time. This helps you stay on track with your prescribed treatments.",
    },
    {
      id: 8,
      question: "How do I get started with Canisa Health?",
      answer: "To get started, download the Canisa Health app from the App Store or Google Play, create an account, and begin exploring the features to manage your health effectively.",
    },
    {
      id: 9,
      question: "Is Canisa Health free to use?",
      answer: "Canisa Health offers both free and premium features. You can access basic health tracking and consultation features for free, while advanced features may require a subscription.",
    },
    {
      id: 10,
      question: "How can I contact Canisa Health support?",
      answer: "You can contact Canisa Health support through the app or website by navigating to the 'Support' section. Here, you can find various ways to reach out, including email and live chat options.",
    },
  ];
  
  return (
    <main className="space-y-20">
      <section className="text-center gap-2 px-10 flex flex-col justify-center items-center h-[40vh] md:gap-4">
        <h1 className="text-3xl font-bold md:text-5xl"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >Contact Us</h1>
        <p className="text-lg font-normal md:text-2xl md:w-3/5 "
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >Got any questions to ask or need help with anything? Reach out to our team for assistance</p>
      </section>
      <section className="bg-primary h-auto p-10 rounded-xl md:w-3/5 mx-auto">
        <div className="py-10 px-10 bg-white h-auto rounded-xl flex flex-col justify-center items-start"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
          <span className="text-[1.5rem] font-semibold">
            Get in Touch with the Canisa Health Team
          </span>
          <p className="font-normal text-md">For more information please get in touch using the form below</p>
          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // Handle form submission
              console.log(values);
              sendEmail(values);
              // Reset form fields
              resetForm();
            }}
          >
            {() => (
              <Form className="mt-10 w-full flex flex-col justify-center items-start gap-7">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <label htmlFor="name" className="text-lg font-medium">Name*</label>
                  <Field 
                    id="name"
                    name="name"
                    className="rounded-full outline-none border border-gray-400 px-5 py-2 w-full"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <label htmlFor="email" className="text-lg font-medium">Email*</label>
                  <Field 
                    id="email"
                    name="email"
                    type="email"
                    className="rounded-full outline-none border border-gray-400 px-5 py-2 w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <label htmlFor="phone" className="text-lg font-medium">Phone Number*</label>
                  <Field 
                    id="phone"
                    name="phone"
                    className="rounded-full outline-none border border-gray-400 px-5 py-2 w-full"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <label htmlFor="message" className="text-lg font-medium">Message</label>
                  <Field 
                    id="message"
                    name="message"
                    as="textarea"
                    className="rounded-xl outline-none border border-gray-400 px-5 py-2 w-full"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-600 text-sm" />
                </div>
                <button 
                  type="submit" 
                  className="font-medium text-white bg-primary rounded-full px-10 py-3 w-full flex flex-col justify-center items-center"
                >
                 {loading ? (
                  <div className="loader"></div> 
                 ): (
                  <span>Send Message</span>
                 )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <section className="flex flex-col justidy-center items-center gap-4">
        <h2 className="text-3xl font-[700] md:text-4xl"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >Frequently Asked Questions</h2>
{FAQS.map((faq)=>(
    <FAQ key={faq.id} question={faq.question} answer={faq.answer}/>
))}
      </section>
    </main>
  );
};

export default Contact;
