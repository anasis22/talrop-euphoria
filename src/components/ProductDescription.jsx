import React from "react";

const ProductDescription = () => {
  return (
    <div className="w-full mt-12">
      <div className="w-full flex items-center justify-around
      xsm:flex-col
      lg:flex-row">
        <ul className="
        xsm:w-[95%]
        lg:w-[45%]">
          <li className="flex w-[90%] ">
            <span className="bg-base-color text-base-color rounded-md">1</span>
            <h2 className="ml-4 text-t-color font-semibold
            xsm:text-xl
            lg:text-3xl">
              Product Description
            </h2>
          </li>

          <li className="flex  mt-4
          xsm:gap-5
          lg:gap-6">
            <p className="text-[#4d4c4c]
            xsm:text-xs
            md:text-lg">Description</p>
            <p className="text-[#4d4c4c]
             xsm:text-xs
             md:text-lg">
              User comments<span className="p-0.5 ml-1 text-white text-xs bg-base-color rounded-md">21</span>
            </p>
            <p className="text-[#4d4c4c]
             xsm:text-xs
             md:text-lg">
              Question & Answer<span className="p-0.5 ml-1 text-white text-xs bg-[#3C4242] rounded-md">4</span>
            </p>
          </li>

          <li className="mt-6">
            <p className="text-sm text-[#807D7E]">
              100% Bio-washed Cotton – makes the fabric extra soft & silky.
              Flexible ribbed crew neck. Precisely stitched with no pilling & no
              fading. Provide all-time comfort. Anytime, anywhere. Infinite
              range of matte-finish HD prints.
            </p>
          </li>
        </ul>

        <ul className="rounded-xl 
         xsm:w-[90%] xsm:mt-10
         lg:w-[42%] lg:overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center
            xsm:border
            md:border-none">
                <ul className="w-full flex items-center justify-center">
                    <li className="w-[33%] py-5 text-center
                     xsm:bg-none
                     md:bg-[#F6F6F6] md:border-r md:border-b md:border-[#BEBCBD]">
                        <p className="text-[#807D7E]
                        xsm:text-xs
                        md:text-sm">Fabric</p>
                        <p className="text-[#3C4242]
                         xsm:text-xs
                         md:text-sm">Bio-washed Cotton</p>
                    </li>
                    <li className="w-[33%] py-5 text-center
                    xsm:bg-none
                    md:bg-[#F6F6F6] md:border-r md:border-b md:border-[#BEBCBD]">
                        <p className="text-[#807D7E] text-center
                         xsm:text-xs
                         md:text-sm">Pattern</p>
                        <p className="text-[#3C4242]
                         xsm:text-xs
                         md:text-sm">Printed</p>
                    </li>
                    <li className="w-[33%] py-5 text-center
                     xsm:bg-none
                     md:bg-[#F6F6F6] md:border-b md:border-[#BEBCBD]">
                        <p className="text-[#807D7E] text-center
                         xsm:text-xs
                         md:text-sm">Fit</p>
                        <p className="text-[#3C4242]
                         xsm:text-xs
                         md:text-sm">Regular-fit</p>
                    </li>
                </ul>
                <ul className="w-full flex items-center justify-center">
                    <li className="w-[33%] py-5 text-center
                     xsm:bg-none
                     md:bg-[#F6F6F6] md:border-r md:border-[#BEBCBD]">
                        <p className="text-[#807D7E] text-center
                         xsm:text-xs
                         md:text-sm">Neck</p>
                        <p className="text-[#3C4242]
                         xsm:text-xs
                         md:text-sm">Round Neck</p>
                    </li>
                    <li className="w-[33%] py-5 text-center
                     xsm:bg-none
                     md:bg-[#F6F6F6] md:border-r  md:border-[#BEBCBD]">
                        <p className="text-[#807D7E] text-center
                         xsm:text-xs
                         md:text-sm">Sleeve</p>
                        <p className="text-[#3C4242]
                         xsm:text-xs
                         md:text-sm">Half-sleeves</p>
                    </li>
                    <li className="w-[33%] py-5 text-center
                     xsm:bg-none
                     md:bg-[#F6F6F6] md:border-[#BEBCBD]">
                        <p className="text-[#807D7E] text-center
                         xsm:text-xs
                         md:text-sm">Style</p>
                        <p className="text-[#3C4242]
                         xsm:text-xs
                         md:text-sm">Casual Wear</p>
                    </li>
                </ul>
            </div>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
