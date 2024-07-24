import React from "react";
import Navbar from "../Navbar";
import PDetails from "../PDetails";
import PpriceAndDetails from "../PpriceAndDetails";

const ProductDetailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-[90%] flex items-center justify-center">
        <Navbar />
      </section>
      <section className=" w-[90%] flex items-center justify-center">
        <PDetails />
        <PpriceAndDetails />
      </section>
    </div>
  );
};

export default ProductDetailPage;
