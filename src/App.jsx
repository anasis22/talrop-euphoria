import React from "react"
import { DataProvider } from "../contexts/DataContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetailPage from "./components/product-detail-page/ProductDetailPage";

const App = () => {
  return (
    <div className="overflow-hidden">
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
