
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./components/home";
import Home2 from "./components/header/home2";
import Home3 from "./components/header/home3";





const FAQs = () => <h1>FAQs Page</h1>;
const Skins = () => <h1>Skins Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">KnowledgeBase<p>Premium WordPress Theme</p></div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/home2">Home 2</Link></li>
          <li><Link to="/home3">Home 3</Link></li>
          <li><Link to="/articles">Articles List</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/skins">Skins</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
