import React from 'react';
import Header from "../components/Header";
import Login from '../components/Login';
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <div className="grid grid-row-3" id="main-container">
        <Header/>
        <main>
            <Login/>
        </main>
        <Footer/>
    </div>
  )
}

export default LoginPage