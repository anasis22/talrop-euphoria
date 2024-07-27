import React from "react";

const MidBanner = () => {
  return (
    <div
      className=" items-center justify-center overflow-hidden mt-20 mb-20        
    xsm:flex xsm:h-[90%] xsm:w-[90%] xsm:flex-col
    sm:flex sm:h-[90%] sm:w-[70%] sm:flex-col
    md:flex md:h-[53%] md:w-[85%] md:flex-row
    lg:flex lg:w-[90%] lg:h-[75%] lg:flex-row"
    >
      <div
        className=" h-full bg-midBannerLeft bg-no-repeat bg-cover flex items-center justify-center
      xsm:w-full xsm:rounded-tr-lg xsm:rounded-tl-lg
      sm:w-full sm:rounded-tr-lg sm:rounded-tl-lg
      md:w-[55%] md:rounded-tr-none md:rounded-tl-lg md:rounded-bl-lg
      lg:w-[55%]
      xl:w-[55%]"
      >
        <div
          className="

        lg:w-[500px]
        xl:w-[500px]"
        >
          <h2
            className=" text-white font-semibold leading-10
          xsm:text-lg
          sm:text-2xl
          md:text-2xl
          lg:text-4xl"
          >
            WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
          </h2>
          <p
            className="mt-4 tracking-wide font-thin text-white
          xsm:text-xs  
          sm:text-sm
          md:text-sm
          lg:text-lg"
          >
            In our journey to improve everyday fashion,
            <br /> euphoria presents EVERYDAY wear range - <br /> Comfortable &
            Affordable fashion 24/7
          </p>
          <button
            className="bg-white text-black rounded-lg mt-12
          xsm:pb-1.5 xsm:pt-1.5 xsm:pr-3 xsm:pl-3
          sm:pb-1.5 sm:pt-1.5 sm:pr-6 sm:pl-6
          md:pb-2 md:pt-2 md:pr-8 md:pl-8"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div
        className=" h-full bg-midBannerRight bg-no-repeat bg-cover rounded-tr-lg rounded-br-lg
      xsm:w-full xsm:rounded-tr-none xsm:rounded-bl-lg
      md:w-[45%] md:rounded-tr-lg md:rounded-bl-none
      lg:w-[45%]
      xl:w-[45%]"
      ></div>
    </div>
  );
};

export default MidBanner;
