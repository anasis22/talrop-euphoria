import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContexts";
import { useNavigate } from "react-router-dom";

const NewArrivalsCard = () => {
  const { data, setSelectedProducts } = useData();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const handleImageClick = (product) => {
    setSelectedProducts(product);
    navigate("/product-details-page");
  };

  const nextSlide = () => {
    if (
      currentIndex <
      data.filter((el) => el.heading === "New Arrival").length - itemsPerPage
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const visibleItems = data
    .filter((el) => el.heading === "New Arrival")
    .slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div
      className="relative flex items-center justify-center gap-24 mt-8
    xsm:flex-col xsm:gap-12
    sm:flex-row sm:flex-wrap
    md:flex-row md:flex-wrap
    lg:flex-row lg:flex-wrap"
    >
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2"
        disabled={currentIndex === 0}
      >
        &#9664;
      </button>
      {visibleItems.map((el) => {
        if (el.heading === "New Arrival") {
          return (
            <div key={el.id} className="cursor-pointer">
              <img
                src={el.img}
                alt={el.title}
                onClick={() => handleImageClick(el)}
                className="hover:scale-105 transition-transform"
              />
              <p className="text-t-color text-sm font-semibold mt-4">
                {el.title}
              </p>
            </div>
          );
        }
      })}
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2"
        disabled={
          currentIndex >=
          data.filter((el) => el.heading === "New Arrival").length -
            itemsPerPage
        }
      >
        &#9654;
      </button>
    </div>
  );
};

export default NewArrivalsCard;
