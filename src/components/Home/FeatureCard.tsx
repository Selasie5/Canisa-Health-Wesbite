 interface FeatureCardTypes {
    src: string,
    alt: string
    title: string,
    description: string
 }
const FeatureCard:React.FC<FeatureCardTypes> = ({src,alt, title, description}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-[10px] px-[15px] py-[26px] bg-[#f8f5f5] rounded-[12px]  w-[500px]">
        <div>
        <img src={src} alt={alt} className=""/>
        </div>
      
      <div className="flex flex-col justify-center items-start gap-[12px]">
      <span className="text-black  text-[22px] font-[700]">{title}</span>
      <p className="text-black font-normal text-[15px]">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
