import React, { useContext, useState, useEffect } from "react";

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

  useEffect(() => {
    fetch("../data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log()
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
    { id: 1, backgroundImage: "url(./src/assets/images/bg-1.jpg)" },
    { id: 2, backgroundImage: "url(./src/assets/images/bg-2.jpg)" },
    { id: 3, backgroundImage: "url(./src/assets/images/bg-3.jpg)" },
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
