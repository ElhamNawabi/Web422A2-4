import React from 'react'
import Header from "../components/Header";
import ResortList from '../components/ResortList';
import Footer from "../components/Footer";

function ResortListingPage(){

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
      <ResortList /> 
      <Footer />
      </main>
    </div>
  )

}

export default ResortListingPage