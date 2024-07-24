import React, { useContext, useState, useEffect } from "react";
import knittedJoggers from "../src/assets/images/knitted-joggers.jpg"
import fullSleeve from "../src/assets/images/full-sleeve.jpg"
import activeTshirts from "../src/assets/images/active-tshirts.jpg"
import urbanShirts from "../src/assets/images/urban-shirts.jpg"

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
