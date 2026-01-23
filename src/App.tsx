// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Page Imports
import Home from './pages/Home';
import Capital from './pages/Capital';
import Platform from './pages/Platform';
import Team from './pages/Team';
import HBH from './pages/HBH';
import Calculator from './pages/Calculator';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lending" element={<Capital />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/team" element={<Team />} />
          <Route path="/hbh-prequal" element={<HBH />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
