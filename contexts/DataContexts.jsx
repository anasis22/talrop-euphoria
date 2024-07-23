import React, { useContext, useState, useEffect } from "react";
import knittedJoggers from "../src/assets/images/knitted-joggers.jpg"
import fullSleeve from "../src/assets/images/full-sleeve.jpg"
import activeTshirts from "../src/assets/images/active-tshirts.jpg"
import urbanShirts from "../src/assets/images/urban-shirts.jpg"
import bg1 from "../src/assets/images/bg-1.jpg"
import bg2 from "../src/assets/images/bg-2.jpg"
import bg3 from "../src/assets/images/bg-3.jpg"

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
    "urban-shirts.jpg" : urbanShirts
  }

  useEffect(() => {
    fetch("./data.json")
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
          img: imageMap[el.img]
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

  const openingAndCloseMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const slides = [
    { id: 1, backgroundImage: bg1 },
    { id: 2, backgroundImage: bg2 },
    { id: 3, backgroundImage: bg3 },
  ];

  const value = {
    slides,
    currentSlide,
    setCurrentSlide,
    menuOpen,
    openingAndCloseMenu,
    data
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
