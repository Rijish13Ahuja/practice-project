import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import ProfileDetails from './components/ProfileDetails';
import PoojaCategories from './components/PoojaCategories';
import ServicesUpdated from './components/ServicesUpdated'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/profile-details" element={<ProfileDetails />} />
            <Route path="/pooja-categories" element={<PoojaCategories />} />
            <Route path="/service-updated" element={<ServicesUpdated />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
