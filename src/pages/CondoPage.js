import React from 'react'
import Header from "../components/Header";
import Condo from '../components/Condo';
import Footer from "../components/Footer";

function CondoPage() {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
      <Condo /> 
      <Footer />
      </main>
    </div>
  )
}

export default CondoPage