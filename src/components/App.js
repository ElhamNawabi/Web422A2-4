import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import '../assets/css/App.css';

function App ()  {

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
        <Hero/>
      </main>
    </div>
  );

}

export default App;
