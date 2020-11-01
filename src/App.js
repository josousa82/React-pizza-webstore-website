import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyles";
import Hero from "./components/Hero";
import {Products} from "./components/Products";
import {pizzaProductData, desertProductData} from "./components/Products/data";
import {Feature} from "./components/Feature";


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="Choose your Favorite" dataFeed={pizzaProductData}/>
        <Feature />
        <Products heading= "Sweet Treats For You" dataFeed={desertProductData}/>
    </Router>
  );
}

export default App;
