import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ResortListingPage from '../pages/ResortListingPage';
import CondoPage from '../pages/CondoPage';
import VillaPage from '../pages/VillaPage';
import BeachHousePage from '../pages/BeachHousePage';
import HotelPage from '../pages/HotelPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import ResortDescriptionPage from '../pages/ResortDescriptionPage';
import '../assets/css/App.css';

function App ()  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<HomePage />} />
        <Route path="resorts" element={<ResortListingPage />} />
        <Route path="Condo" element={<CondoPage />} />
        <Route path="Villa" element={<VillaPage />} />
        <Route path="Beach-house" element={<BeachHousePage />} />
        <Route path="Hotel" element={<HotelPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="resorts/:id" element={<ResortDescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
