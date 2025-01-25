import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import THCProducts from "./components/THCProducts";
import Art from "./components/Art";
import ArtSupplies from "./components/ArtSupplies";
import TrinketsSwag from "./components/TrinketsSwag";
import Suggestions from "./components/Suggestions";

const App = () => {
  return (
    <div className="App container h-100">
      <header className="App-header row h-100">
        <div className="col-12 my-auto">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<FirstScreen />} />
              <Route path="/second" element={<SecondScreen />} />
              <Route path="/thc-products" element={<THCProducts />} />
              <Route path="/art" element={<Art />} />
              <Route path="/art-supplies" element={<ArtSupplies />} />
              <Route path="/trinkets-swag" element={<TrinketsSwag />} />
              <Route path="/suggestions" element={<Suggestions />} />
            </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
};

export default App;
