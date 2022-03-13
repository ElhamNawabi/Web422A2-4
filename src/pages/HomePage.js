import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import PropertyTypes from "../components/PropertyTypes";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";

function HomePage(){
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
        <Hero/>
        <PropertyTypes />
        <BestSeller />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage