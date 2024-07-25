import React from "react"
import { DataProvider } from "../contexts/DataContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetailPage from "./components/product-detail-page/ProductDetailPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center flex-col">
      <Router>
        <DataProvider>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/product-details-page" Component={ProductDetailPage}/>
          </Routes>
        </DataProvider>
      </Router>
    </div>
  );
};

export default App;
