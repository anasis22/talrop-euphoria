import React from "react";
import { useData } from "../../contexts/DataContexts";

const Feedback = () => {
  const { data } = useData();

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <div
      className="w-[90%] flex items-start justify-between gap-4 mt-10 
    xsm:flex-col xsm:items-center
    lg:flex-row"
    >
      {data.map((el) => {
        if (el.heading === "Feedback") {
          return (
            <div
              key={el.id}
              className=" p-6 border border-[#BEBCBD] overflow-hidden
            xsm:h-[160px] xsm:w-[78%] xsm:rounded-3xl
            lg:h-full lg:rounded-md lg:w-[32%]"
            >
              <div className="w-full h-[260px]">
                <ul
                  className="
                xsm:flex xsm:flex-row
                lg:flex-col"
                >
                  <li
                    className=" 
                    xsm:flex xsm:items-center xsm:justify-center w-[48%]
                    lg:flex lg:items-start lg:justify-between lg:w-full"
                  >
                    <img className="
                    xsm:rounded-2xl
                    lg:rounded-none" src={el.img} alt={el.name} />
                    <img
                      className="
                        lg:block
                        xsm:hidden"
                      src={el.ratingStarImg}
                      alt={el.name}
                    />
                  </li>
                  <div className="
                  xsm:flex xsm:flex-col xsm:ml-4
                  lg:flex lg:flex-col">
                    <h3
                      className="text-[#3C4242] font-mono 
                    xsm:text-lg  
                    sm:text-2xl  
                    lg:mt-6"
                    >
                      {el.name}
                    </h3>
                    <p
                      className="text-[#807D7E] text-sm 
                    xsm:hidden lg:block  
                    lg:mt-2"
                    >
                      {el.msg}
                    </p>
                    <p className="hidden text-[#807D7E] text-sm
                    xsm:block
                    lg:hidden
                    ">
                    {truncateText(el.msg, 80)}
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Feedback;
