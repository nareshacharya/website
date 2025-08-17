import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FloatingNav from './components/FloatingNav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Project case study pages
import CrowdManagement from './pages/projects/CrowdManagement';
import DisasterManagement from './pages/projects/DisasterManagement';
import PatrolManagement from './pages/projects/PatrolManagement';
import CrimeAnalytics from './pages/projects/CrimeAnalytics';
import InvestigationAnalytics from './pages/projects/InvestigationAnalytics';
import SuspectTracking from './pages/projects/SuspectTracking';
import WomenSafety from './pages/projects/WomenSafety';
import CrumUnderwriting from './pages/projects/CrumUnderwriting';
import TALServicePortal from './pages/projects/TALServicePortal';
import ASBUXAssessment from './pages/projects/ASBUXAssessment';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/blogs/BlogDetail';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import NotFound from './pages/NotFound';
import Hekla from './pages/projects/Hekla';
import Beetle from './pages/projects/Beetle';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <FloatingNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/vision" element={<Vision />} />
        {/* <Route path="/blogs/:blogId" element={<BlogDetail />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* Project Detail Pages */}
        <Route path="/portfolio/crowd-management" element={<CrowdManagement />} />
        <Route path="/portfolio/disaster-management" element={<DisasterManagement />} />
        <Route path="/portfolio/patrol-management" element={<PatrolManagement />} />
        <Route path="/portfolio/crime-analytics" element={<CrimeAnalytics />} />
        <Route path="/portfolio/investigation-analytics" element={<InvestigationAnalytics />} />
        <Route path="/portfolio/suspect-tracking" element={<SuspectTracking />} />
        <Route path="/portfolio/women-safety" element={<WomenSafety />} />
  <Route path="/portfolio/crum-underwriting" element={<CrumUnderwriting />} />
  <Route path="/portfolio/tal-service-portal" element={<TALServicePortal />} />
  <Route path="/portfolio/asb-ux-assessment" element={<ASBUXAssessment />} />
  <Route path="/portfolio/hekla" element={<Hekla />} />
  <Route path="/portfolio/beetle" element={<Beetle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
