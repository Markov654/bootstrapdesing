import React from 'react';
import './App.css';
import logo from "./logo.svg";

function App() {
  return (
    <div class="container ">
    <div class="row">
      <div class="col-md-3">
        <img src = {logo}></img>
      </div>
      
      <div class="col-md-6 mql">
        <span>mql</span>
        <span>mql</span>
        <span>mql</span>
        
        
      </div>
      <div class="col-md-3">
        3 of 3
      </div>
    </div>
   
  </div>



  );
}

export default App;
