// src/App.jsx
import React, { useState, useEffect } from 'react'; // 1. Import useState & useEffect
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Header from './components/Header';
import Loading from './components/Loading'; // 2. Import your new component

const Admin = () => <h1 className="text-3xl text-white text-center mt-20">Admin Login</h1>;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <Header />

      <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;