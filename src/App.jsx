import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import SuccessModal from './components/SuccessModal';
import BackToTop from './components/BackToTop';
import BackgroundAnimation from './components/BackgroundAnimation';
import Port from './components/Port';
// import CybersecurityServices from './components/CybersecurityServices';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectModal, setProjectModal] = useState({ open: false, title: '', description: '', tech: '' });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const openProjectModal = (title, description, tech) => {
    setProjectModal({ open: true, title, description, tech });
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setProjectModal({ open: false, title: '', description: '', tech: '' });
    document.body.style.overflow = 'auto';
  };

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gradient-bg">
      <BackgroundAnimation />
      <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <Hero/>
      <Services />
      <TechStack />
      {/* <CybersecurityServices/> */}
      <About />
      {/* <Portfolio openProjectModal={openProjectModal} /> */}
      {/* <Portfolio openProjectModal={openProjectModal} /> */}
      <Port openProjectModal={openProjectModal}/>
      <Testimonials />
      <Process />
      <Blog />
      <CTA />
      <Contact openSuccessModal={openSuccessModal} />
      <Footer />
      <ProjectModal
        isOpen={projectModal.open}
        closeModal={closeProjectModal}
        title={projectModal.title}
        description={projectModal.description}
        tech={projectModal.tech}
      />
      <SuccessModal isOpen={successModalOpen} closeModal={closeSuccessModal} />
      <BackToTop />
    </div>
  );
}

export default App;