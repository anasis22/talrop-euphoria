import React, { useContext, useState, useEffect } from "react";
import knittedJoggers from "/assets/images/knitted-joggers.jpg"
import fullSleeve from "/assets/images/full-sleeve.jpg"
import activeTshirts from "/assets/images/active-tshirts.jpg"
import urbanShirts from "/assets/images/urban-shirts.jpg"
import shirts from "/assets/images/shirts.jpg"
import printedTshirts from "/assets/images/printed-tshirts.jpg"
import plainTshirts from "/assets/images/plain-tshirts.jpg"
import poloTshirt from "/assets/images/polo-tshirt.jpg"
import hoodies from "/assets/images/hoodies.jpg"
import jeans from "/assets/images/jeans.jpg"
import activeWear from "/assets/images/active-wear.jpg"
import boxers from "/assets/images/boxers.jpg"
import hoodiesGirl from "/assets/images/hoodies-girl.jpg"
import coatsGirl from "/assets/images/coats-girl.jpg"
import teesGirl from "/assets/images/tees-girl.jpg"
import boxersGirl from "/assets/images/boxers-girl.jpg"

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState();

  const imageMap = {
    "knitted-joggers.jpg" : knittedJoggers,
    "full-sleeve.jpg" : fullSleeve,
    "active-tshirts.jpg" : activeTshirts,
    "urban-shirts.jpg" : urbanShirts,
    "shirts.jpg" : shirts,
    "printed-tshirts.jpg" : printedTshirts,
    "plain-tshirts.jpg" : plainTshirts,
    "polo-tshirt.jpg" : poloTshirt,
    "hoodies.jpg" : hoodies,
    "jeans.jpg" : jeans,
    "active-wear.jpg" : activeWear,
    "boxers.jpg" : boxers,
    "hoodies-girl.jpg" : hoodiesGirl,
    "coats-girl.jpg" : coatsGirl,
    "tees-girl.jpg" : teesGirl,
    "boxers-girl.jpg" : boxersGirl
  }

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        const updatedData = data.map(el => ({
          ...el,
          img: imageMap[el.img],
        }))
        setData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const openingAndCloseMenu = () => {
    console.log('menu toggled:', menuOpen)
    setMenuOpen(!menuOpen);
  };

  const [selectedProducts,setSelectedProducts] = useState()

  const value = {
    currentSlide,
    setCurrentSlide,
    menuOpen,
    openingAndCloseMenu,
    data,
    selectedProducts,
    setSelectedProducts
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
