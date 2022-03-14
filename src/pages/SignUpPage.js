import React from 'react';
import Header from "../components/Header";
import SignUp from '../components/SignUp';
import Footer from "../components/Footer";

function SignUpPage() {
  return (
    <div className="grid grid-row-3" id="main-container">
        <Header/>
        <main>
            <SignUp/>
        </main>
        <Footer/>
    </div>
  )
}

export default SignUpPage