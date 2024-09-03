import { useState } from "react";

interface FAQType{
    question: string,
    answer: string,
}

const FAQ:React.FC<FAQType> = ({question, answer}) => {

    const [open, setOpen] = useState(false);

    const makeAnswerVisible=():void=>
    {
        setOpen(true);
        console.log(open)
    }
    const hideAnswer=():void=>
    {
        setOpen(false);
        console.log(open)
    }
  return (

    <div className="flex flex-col justify-center items-start gap-4 w-[831px] px-10 py-5" onMouseLeave={hideAnswer}>
        <div className="flex justify-between items-center w-full">
            <span className="text-[19px] w-[494px] font-[400]">{question}</span>
            
                {
                    open ? (
                            <span onClick={hideAnswer} className="hover:cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>

                            </span>
                    ): (
                        <span onClick={makeAnswerVisible} className=" hover:text-primary hover:cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                        </span>
                        
                    )
                }
          
            
        </div>
        <div className="">
       {
        open ? (
            <p className="text-grey/80 font-medium text-[16px]">{answer}</p>
        ):""
       }
        </div>
        <hr className="bg-[#D9D9D9] h-[1px] w-[760px]"/>
    </div>
      
  )
}

export default FAQ;
