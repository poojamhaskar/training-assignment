import React from "react";
import "./App.css";
import Footer from "../src/Assignment-4/common/Footer";
import Header from "../src/Assignment-4/common/Header";
import "../src/Assignment-4/assets/style.css";

import { BrowserRouter } from "react-router-dom";
import Route from "../src/Assignment-4/component/Route";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


