import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Signup from './components/Signup';
import Dasboard from './components/Dasboard';

function App() {
  return (
    <BrowserRouter>
      <nav>
         
       
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dasboard" element={<Dasboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
