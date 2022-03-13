import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ResortListingPage from '../pages/ResortListingPage';
import CondoPage from '../pages/CondoPage';
import '../assets/css/App.css';

function App ()  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<HomePage />} />
        <Route path="resorts" element={<ResortListingPage />} />
        <Route path="condos" element={<CondoPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
