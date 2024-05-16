import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Layout/Header';
import Middle from './components/Pages/Middle';
import CompleteProfile from './components/Pages/completeUserProfile';
import Footer from './components/Layout/Footer';
import Login from './components/Pages/Login';
import SideBar from './components/Layout/sideBar';
import Register from './components/Pages/Register';
import Dropzone from './components/Ui/Dropzone';
import SearchBar from './components/Layout/SearchBar';
import FindSeekers from './components/Pages/FindSeekers';
import EditProfile from './components/Pages/EditProfile';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Middle />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* Add more routes for other pages */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
