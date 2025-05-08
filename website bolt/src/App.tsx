import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Talks from './pages/Talks';
import Misc from './pages/Misc';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;