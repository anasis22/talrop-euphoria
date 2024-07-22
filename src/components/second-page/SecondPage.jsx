import React from "react";
import Cards from "../Cards";
import NewArrivals from "../NewArrivals";

const SecondPage = () => {
  return (
   <div className="w-full flex items-center justify-center flex-col">
    <Cards />
    <NewArrivals />
   </div>
  );
};

export default SecondPage;
