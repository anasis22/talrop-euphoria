import React from "react";
import Navbar from "../components/Navbar";
import PDetails from "../components/PDetails";
import PpriceAndDetails from "../components/PpriceAndDetails";
import Menu from "../components/Menu";
import ProductDescription from "../components/ProductDescription";
import SimilarProducts from "../components/SimilarProducts";
import Footer from "../components/Footer";

const ProductDetailPage = () => {
  return (
    <div className="w-screen relative flex items-center justify-start flex-col">
      <Navbar />
      <section
        className=" w-[90%] flex items-center justify-center
      xsm:flex-col
      md:flex-row"
      >
        <PDetails />
        <PpriceAndDetails />
      </section>
      <section className="w-[90%] ">
        <ProductDescription />
      </section>
      <section className="w-[85%] mt-12">
        <div className="flex w-[90%] ">
          <span className="bg-base-color text-base-color rounded-md">1</span>
          <h2 className="ml-4 text-t-color text-3xl font-semibold">
            Similar Products
          </h2>
        </div>
        <SimilarProducts />
      </section>
      <Footer />
      <Menu />
    </div>
  );
};

export default ProductDetailPage;
