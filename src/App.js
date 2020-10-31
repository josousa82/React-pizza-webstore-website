import React from 'react'
import {Navbar} from "./commponents/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyles";

function App() {
  return (
    <Router>
        <GlobalStyle />
       <Navbar />
    </Router>
  );
}

export default App;
