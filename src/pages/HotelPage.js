import React from 'react'
import Header from "../components/Header";
import Hotel from '../components/Hotel';
import Footer from "../components/Footer";

function HotelPages() {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
      <Hotel /> 
      <Footer />
      </main>
    </div>
  )
}

export default HotelPages