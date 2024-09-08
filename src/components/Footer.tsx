import { Link } from "react-router-dom"

const Footer = () => {
    const EssentialLinks:{id:1,
        tag: string,
        path: string,
    }[]=[
        {id: 1,
            tag: "Home",
            path: "/"
        },
        {id: 1,
            tag: "About Us",
            path: "/"
        },
        {id: 1,
            tag: "Partner With Us",
            path: "/"
        },
        {id: 1,
            tag: "Benefits",
            path: "/"
        },
        {id: 1,
            tag: "Features",
            path: "/"
        },
    ]
  return (
    <footer className="bg-primary text-white mt-36 py-10 flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4">
         <div className="flex flex-col justify-center items-start gap-8">
            <h5 className="text-xl font-medium">Essential Links</h5>
                {EssentialLinks.map((links)=>(
                    <Link key={links.id}  to={links.path} >
                        <span className="text-white font-medium">{links.tag}</span>
                        </Link>
                ))}
         </div>
         <div className="flex flex-col justify-between items-start gap-8">
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
         </div>
      </div>
    </footer>
  )
}

export default Footer
