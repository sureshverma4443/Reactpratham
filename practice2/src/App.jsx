import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:postid" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
