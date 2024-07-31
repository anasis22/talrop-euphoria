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
import blackSweatshirt from "/assets/images/black-sweatshirt.jpg"
import linePatternBlack from "/assets/images/line-pattern-black.jpg"
import blackShorts from "/assets/images/black-shorts.jpg"
import levenderHoddie from "/assets/images/levender-hoodie.jpg"
import feedbackOne from "/assets/images/feedbackOne.jpg"
import feedbackTwo from "/assets/images/feedbackTwo.jpg"
import feedbackThree from "/assets/images/feedbackThree.jpg"
import ratingStarOne from "/assets/images/ratingStarOne.jpg"
import ratingStarTwo from "/assets/images/ratingStarTwo.jpg"
import ratingStarThree from "/assets/images/ratingStarThree.jpg"
import whiteTshirt from "/assets/images/white-tshirt.jpg"
import darkGreenSweatshirt from "/assets/images/dark-green-sweatshirt.jpg"
import levenderSweatshirt from "/assets/images/levender-sweatshirt.jpg"
import urbanJacket from "/assets/images/urban-jacket.jpg"


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
    "boxers-girl.jpg" : boxersGirl,
    "black-sweatshirt.jpg": blackSweatshirt,
    "line-pattern-black.jpg": linePatternBlack,
    "black-shorts.jpg" : blackShorts,
    "levender-hoodie.jpg": levenderHoddie,
    "feedbackOne.jpg" : feedbackOne,
    "feedbackTwo.jpg" : feedbackTwo,
    "feedbackThree.jpg" : feedbackThree,
    "white-tshirt.jpg" : whiteTshirt,
    "dark-green-sweatshirt.jpg" : darkGreenSweatshirt,
    "levender-sweatshirt.jpg" : levenderSweatshirt,
    "urban-jacket.jpg" : urbanJacket,
  }

  const ratingStarImgMap = {
    "ratingStarOne.jpg" : ratingStarOne,
    "ratingStarTwo.jpg" : ratingStarTwo,
    "ratingStarThree.jpg" : ratingStarThree,
  }

  useEffect(() => {
    fetch("/data/data.json")
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
          ratingStarImg: ratingStarImgMap[el.ratingStarImg]
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
