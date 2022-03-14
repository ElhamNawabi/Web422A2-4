import React from 'react';
import Header from "../components/Header";
import BeachHouse from '../components/BeachHouse';
import Footer from "../components/Footer";

function BeachHousePage() {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
      <BeachHouse /> 
      <Footer />
      </main>
    </div>
  )
}

export default BeachHousePage