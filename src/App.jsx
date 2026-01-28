import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Header from './components/Header';

const Admin = () => <h1 className="text-3xl text-white text-center mt-20">Admin Login</h1>;

function App() {
  return (
    <BrowserRouter>
      {/* 1. Add Header Here - It sits above the content */}
      <Header />
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300 pt-20">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;