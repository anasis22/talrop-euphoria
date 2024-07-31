import React from "react";
import fb from "/assets/icons/facebook.svg";
import instagram from "/assets/icons/instagram.svg";
import twitter from "/assets/icons/twitter.svg";
import linkedin from "/assets/icons/linkedin.svg";
import playstore from "/assets/icons/playstore.svg";
import phone from "/assets/icons/phone.svg";
import arrowDown from "/assets/icons/arrow-down.svg";


const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#3C4242]  text-[#F6F6F6] mt-12 pt-12">
      <div className="w-[85%] flex flex-col items-center justify-center">
        <ul className="w-full flex items-start
        xsm:justify-around 
        sm:flex-row sm:justify-between">
          <li>
            <h4 className="
             xsm:text-lg xsm:font-semibold
             sm:text-xl sm:font-semibold">Need Help</h4>
            <p className="text-sm mt-8 hover:underline cursor-pointer">Contact Us</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Track Order</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Returns & Refunds</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">FAQ's</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Career</p>
          </li>
          <li className="
          xsm:hidden
          lg:block">
            <h4 className="text-xl font-semibold">Company</h4>
            <p className="text-sm mt-8 hover:underline cursor-pointer">About Us</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">euphoria Blog</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">euphoriastan</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Collaboration</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Media</p>
          </li>
          <li className="">
            <h4 className="
             xsm:text-lg xsm:font-semibold
             sm:text-xl sm:font-semibold">More Info</h4>
            <p className="text-sm mt-8 hover:underline cursor-pointer">Term and Conditions</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Privacy Policy</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Shipping Policy</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">Sitemap</p>
          </li>
          <li className="
           xsm:hidden
           sm:block">
            <h4 className="text-xl font-semibold">Location</h4>
            <p className="text-sm mt-8 hover:underline cursor-pointer">support@euphoria.in</p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">
              Eklingpura Chouraha, Ahmedabad Main Road
            </p>
            <p className="text-sm mt-4 hover:underline cursor-pointer">
              (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
            </p>
          </li>
        </ul>

        <ul className="w-full flex justify-between 
        xsm:flex-col xsm:items-center xsm:mt-8
        sm:flex-row sm:items-end sm:mt-6">
          <li className="flex gap-3 ">
            <a className="bg-white cursor-pointer
            xsm:pr-2.5 xsm:pl-2.5 xsm:pt-1 xsm:pb-1 xsm:rounded-lg
            sm:pr-3 sm:pl-3 sm:pt-2 sm:pb-2 sm:rounded-xl ">
              <img src={fb} alt="fb" />
            </a>
            <a className="bg-white cursor-pointer
             xsm:pr-2.5 xsm:pl-2.5 xsm:pt-1 xsm:pb-1 xsm:rounded-lg
             sm:pr-3 sm:pl-3 sm:pt-2 sm:pb-2 sm:rounded-xl">
              <img src={instagram} alt="instagram" />
            </a>
            <a className="bg-white cursor-pointer
             xsm:pr-2.5 xsm:pl-2.5 xsm:pt-1 xsm:pb-1 xsm:rounded-lg
             sm:pr-3 sm:pl-3 sm:pt-2 sm:pb-2 sm:rounded-xl">
              <img src={twitter} alt="twitter" />
            </a>
            <a className="bg-white cursor-pointer
             xsm:pr-2.5 xsm:pl-2.5 xsm:pt-1 xsm:pb-1 xsm:rounded-lg
             sm:pr-3 sm:pl-3 sm:pt-2 sm:pb-2 sm:rounded-xl">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>

          <li className="
          xsm:mt-8
          sm:mt-0">
            <h2 className="
            xsm:text-lg xsm:font-semibold xsm:text-center
            sm:text-xl sm:font-semibold sm:text-left">Download The App</h2>
            <div className="flex mt-6
            xsm:flex-col
            sm:flex-row">
              <div className="flex cursor-pointer">
                <img src={playstore} alt="playstore" />
                <div className="ml-3">
                  <p className="text-xs">android app</p>
                  <p className="text-sm">Google Play</p>
                </div>
              </div>
              <div className="flex cursor-pointer
              xsm:ml-0 xsm:mt-6
              sm:ml-6 sm:mt-0">
                <img src={phone} alt="playstore" />
                <div className="ml-4">
                  <p className="text-xs">Available on the</p>
                  <p className="text-sm">App Store</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <hr className="mt-12 border-white w-full h-[0.5px]
        xsm:hidden
        sm:block" />

        <div className="w-[95%] flex items-center justify-between mt-6
         xsm:hidden
         sm:flex">
            <h4 className="text-xl font-semibold">Popular Categories</h4>
            <img src={arrowDown} alt="arrowDown" />
        </div>

        <hr className="mt-8 border-white w-full h-[0.5px]
         xsm:hidden
         sm:block" />

        <p className="mt-8 mb-8
        xsm:text-[8px]
        sm:text-xs">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
