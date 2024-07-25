import React from "react";
import Navbar from "../Navbar";
import PDetails from "../PDetails";
import PpriceAndDetails from "../PpriceAndDetails";
import Menu from "../Menu";

const ProductDetailPage = () => {
  return (
    <div className="w-screen relative flex items-center justify-start flex-col">
      <Navbar />
      <section className=" w-[90%] flex items-center justify-center">
        <PDetails />
        <PpriceAndDetails />
      </section>
      <Menu />
    </div>
  );
};

export default ProductDetailPage;
