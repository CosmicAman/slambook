import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";
import Person from "./Person.jsx";
import FriendshipMeter from "./FriendshipMeter.jsx";

function App() {
  
  return(
    <Router>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Card/>}/>
        <Route path="/person/:name" element={<Person/>}/>
        <Route path="/friendship-meter" element={<FriendshipMeter />} />

      </Routes>
      <Footer/>   
    </Router>
  );
}

export default App;
