import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import ResortList from "./ResortList";
import '../assets/css/App.css';

function App ()  {

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
        <Hero/>
        <ResortList/>
      </main>
    </div>
  );

}

export default App;
