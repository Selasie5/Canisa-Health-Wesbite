interface PartnershipCardPropTypes{
    title: string,
    description: string
}

const PartnershipCard:React.FC<PartnershipCardPropTypes> = ({title, description}) => {
  return (
    <div className="bg-gray-200 min-w-[250px] h-auto rounded-[0.175rem] shadow-sm px-5  py-10 border-t-4 border-t-primary partnership-card">
      <h4 className="text-2xl font-bold text-black">{title}</h4>
      <p className="text-grey w-1/2">{description}</p>
    </div>
  )
}

export default PartnershipCard
