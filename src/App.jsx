// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom'; // <--- CHANGE THIS IMPORT
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About'; // Don't forget to import About
import Header from './components/Header';

const Admin = () => <h1 className="text-3xl text-white text-center mt-20">Admin Login</h1>;

function App() {
  return (
    // CHANGE <BrowserRouter> TO <HashRouter>
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
  )
}

export default App;