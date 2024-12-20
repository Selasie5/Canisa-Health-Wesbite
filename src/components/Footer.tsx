import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import { useState } from "react";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  // const [email, setEmail] = useState(""); // State for the email input

  const validationSchema = Yup.object({
    Name: Yup.string().required('Name is required'),
    Email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const EssentialLinks = [
    { id: 1, tag: "Home", path: "/" },
    { id: 2, tag: "About Us", path: "/our-story" },
    { id: 3, tag: "Partner With Us", path: "/health-care-professionals" },
    { id: 4, tag: "Features", path: "/#features" },
    { id: 5, tag: "Privacy Policy", path: "https://canisahealth.gitbook.io/canisa-health-privacy-policy" },
  ];

  const mailerApiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNGY1Y2U1MDNhZWM2MTJmZDc0ZDYxYTZmZjdjNTAyMzFkOGI5NDcxNGU3MzFkZDM3OTYyNDgyNGJjZmM5ODhiNzUzMTVhM2ZhOTkyYTU2MWEiLCJpYXQiOjE3MzE0MTQyNjIuMzI2MzYyLCJuYmYiOjE3MzE0MTQyNjIuMzI2MzY1LCJleHAiOjQ4ODcwODc4NjIuMzE4NDY2LCJzdWIiOiIxMTk2ODg3Iiwic2NvcGVzIjpbXX0.mZyexpRj0OOH2U3dkRIjv6spl4R4tGn0ZRKULXTu0TcPfALkwr6uZ3ONrfFifKEBbqm1ITXncCBN0Q0fwtHWAjIIs5Cdg2fqqSvGWtXVDY9VRxYq9WKWxBjcC8m3xmqGkeBmz5Wyoq8PaPhKLkPr75oZOM1cK0X-ZT7I51wTDXtVeTogDwdsD89YSvEF2UIZrACTrqY5xjXuBp1bJHep5id2LBK_yBcasiAE5NYstXtSQp_DuXazQwszCk1NZBIwD0MyR9mMiV2BbRZ1Fmdf6SoLcAeG0QtdBJNy2abJdq0uE7d4CIdTMh_fqEHIdv2K4A8jsGoXOhufz9g9njyHUrsSCPg9ra2y7tmCkdYFSf5Oa_um7Hu0C6SwuRPHGVEc4oyMSVz3BbSnf-kmtlKuqS_jpj3WFbc8On6lR7CwZPiDBygaHCaa9a08XhOHRk2aFYyfxrffl-3XlCKeZ_eTjBxxtRYVCFex9cqFmdf1bOA-65tFmyxw1Uj9fN9y1W6b0Y15l7AZqNvqyg8_zvk7SBi6PEOFY435mgxG7V3rctQ0MNq6Nl-PjyY1bNwKHrIB_x8kSvo1PPO2lKZXcqJ4P2SAKeoIak4bbwwww8fKlZsnaT-_wRFjeSr-1wWd0oueKXG0ut7yv0jysGfRi29KtMuywxYYrBPfccw_ZLWXpPg" // Ensure this is set in your environment

  const handleSubmit = async (values: { Name: string; Email: string }, { resetForm }: any) => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${mailerApiKey}`,
        },
        body: JSON.stringify({
          email: values.Email,
          fields: {
            name: values.Name,
          },
          // Optional: you can add group IDs here
          // groups: ["4243829086487936"],
        }),
      });

      if (response.ok) {
        setSuccess("You have successfully subscribed!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong!");
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
      resetForm(); // Reset the form fields
    }
  };

  return (
    <footer className="bg-primary text-white p-10 flex flex-col justify-center items-start md:items-center gap-10">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-20">
        <div className="flex flex-col justify-start items-start gap-8 md:w-1/3">
          <h5 className="text-xl font-medium">Essential Links</h5>
          {EssentialLinks.map((links) => (
            <Link key={links.id} to={links.path}>
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
          <h4 className="text-xl">Be the first to receive our product updates and other essential news</h4>
          <Formik
            initialValues={{ Name: '', Email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mt-10 w-full flex flex-col justify-center items-start gap-7">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <Field 
                    id="Name"
                    name="Name"
                    className="rounded-lg outline-none border border-white bg-transparent placeholder-white text-white px-5 py-3 w-full"
                    placeholder="Enter your first Name"
                  />
                  <ErrorMessage name="Name" component="div" className="text-red-600 text-sm" />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <Field 
                    id="Email"
                    name="Email"
                    type="email"
                    placeholder="Enter your email address"
                    className="placeholder-white bg-transparent text-white rounded-lg outline-none border border-white px-5 py-3 w-full"
                  />
                  <ErrorMessage name="Email" component="div" className="text-red-600 text-sm" />
                </div>

                <button 
                  type="submit" 
                  className="font-medium text-white bg-primary rounded-full px-10 py-3 w-full flex flex-col justify-center items-center"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Subscribe"}
                </button>
                {success && <div className="text-white bg-black/30 p-2 rounded-lg">{success} 👍</div>}
                {error && <div className="text-red-600">{error}</div>}
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="flex justify-center items-center text-center">
        <span className="text-white font-light text-md md:text-lg">&copy; 2024 Canisa Health. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
