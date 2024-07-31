import React from "react"
import { DataProvider } from "../contexts/DataContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center flex-col">
      <Router>
        <DataProvider>
          <ScrollToTop />
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
