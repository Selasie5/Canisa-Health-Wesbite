import React from 'react';

interface FeatureCardTypes {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardTypes> = ({ src, alt, title, description }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-6 bg-[#f8f5f5] rounded-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
      <img src={src} alt={alt} className="w-full h-auto rounded-t-lg object-cover" />
      
      <div className="flex flex-col justify-center items-start gap-3">
        <h3 className="text-black text-2xl font-bold">{title}</h3>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
