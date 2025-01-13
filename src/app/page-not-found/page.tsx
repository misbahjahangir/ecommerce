import Image from "next/image";
import React from "react";


function page() {
  return (
    <div>
      <div className="h-[286] w-full bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-5 text-[#1D3178] pt-20">
          Shop List
        </h2>
        
      </div>
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-20">
        <Image
          className="h-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          src="/404.png"
          alt="404"
          width={1000}
          height={1000}
        />
        <button className="px-4 py-2 bg-[#FB2E86] text-white rounded hover:bg-[#e22276] transition mt-4">
          Back To Home
        </button>
      </div>
      <div className="flex justify-center items-center py-10 px-4">
        <Image
          src="/brand.png"
          alt="Brand Logos"
          width={1000}
          height={1000}
          className="h-auto max-w-full sm:max-w-[600px] md:max-w-[800px] object-contain"
        />
      </div>
    </div>
  );
}

export default page;