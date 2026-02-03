// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // Assuming this exists or I should add it, but for now sticking to what was there + new route

// Page Imports
import Home from './pages/Home';
import Capital from './pages/Capital';
import Platform from './pages/Platform';
import Team from './pages/Team';
import HBH from './pages/HBH';
import Calculator from './pages/Calculator';
import Intake from './pages/Intake';
import Contact from './pages/Contact'; // Adding Contact as it was referenced in Header/Footer
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

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
          <Route path="/intake" element={<Intake />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
