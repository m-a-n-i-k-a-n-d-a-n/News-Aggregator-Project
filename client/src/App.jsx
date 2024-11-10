import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header';
import Login from './components/Login';
import Register from './components/Register';
import News from './components/News';
import TopHeadlines from './components/TopHeadlines';
import CountryNews from './components/CountryNews';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <Header onLogout={handleLogout} /> {/* Pass handleLogout as a prop to Header */}
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/top-headlines/:category" element={<TopHeadlines />} />
            <Route path="/country/:iso" element={<CountryNews />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect all unknown routes to home */}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login by default */}
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
