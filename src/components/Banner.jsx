import React from "react";
import { useData } from "../../contexts/DataContexts";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const { slides } = useData();

  return (
    <div className="w-full h-full ">
      <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full
            xsm:h-[250px]
            sm:h-[450px]
            md:h-[500px]
            lg:h-[710px]
            flex items-center justify-start
            "
            style={{
              backgroundImage: slide.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[30%] ml-40
            xsm:ml-16 xsm:w-[45%]
            sm:ml-24">
              <ul>
                <li className="mt-8
                xsm:mt-1">
                  <p
                    className="
                text-white text-2xl text-left
                xsm:text-sm
                sm:text-xl"
                  >
                    T-shirt / Tops
                  </p>
                </li>

                <li className="mt-8
                xsm:mt-2">
                  <h3
                    className="
                text-white text-left font-extrabold
                xsm:text-2xl
                sm:text-4xl
                md:text-5xl
                lg:text-7xl"
                  >
                    Summer <br />
                    Value Pack
                  </h3>
                </li>

                <li className="mt-8
                xsm:mt-2">
                  <p
                    className="
                text-white text-2xl text-left
                xsm:text-sm
                sm:text-xl"
                  >
                    cool / colorful / comfy
                  </p>
                </li>

                <li className="text-left mt-8
                xsm:mt-4">
                  <button className="
                  bg-white text-black pt-2 pb-2 pr-8 pl-8
                  xsm:pr-5 xsm:pl-5 xsm:pt-1 xsm:pb-1 xsm:text-sm">Shop Now</button>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
