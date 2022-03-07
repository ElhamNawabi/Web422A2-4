import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import ResortList from "../components/ResortList";
function HomePage(){
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
        <Hero/>
        <ResortList/>
      </main>
    </div>
  )
}

export default HomePage