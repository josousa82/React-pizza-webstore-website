import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyles";
import Hero from "./components/Hero";
import {Products} from "./components/Products";
import {productData} from "./components/Products/data";


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products headings= "Choose your Favorite" dataFeed={productData}/>
    </Router>
  );
}

export default App;
