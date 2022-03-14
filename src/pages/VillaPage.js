import React from 'react'; 
import Header from "../components/Header";
import Villa from '../components/Villa';
import Footer from "../components/Footer";

function VillaPage() {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header/>
      <main>
      <Villa /> 
      <Footer />
      </main>
    </div>
  )
}

export default VillaPage