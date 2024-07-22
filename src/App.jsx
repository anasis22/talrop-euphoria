import React from "react";
import FirstPage from "./components/first-page/FirstPage";
import { DataProvider } from "../contexts/DataContexts";
import SecondPage from "./components/second-page/SecondPage";

const App = () => {
  return (
    <div className="overflow-hidden">
      <DataProvider>
        <FirstPage />
        <SecondPage />
      </DataProvider>
    </div>
  );
};

export default App;
