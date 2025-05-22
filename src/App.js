import { Routes, Route } from 'react-router-dom'; // 👈 solo esto

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Common/Footer';

import Home from './Pages/Home';       // tu sección con Hero, WhyUyuni, etc.
import Services from './Pages/OurServices';
import ContactPage from './Pages/ContactPage.jsx/ContactPage';
import AboutUsPage from './Pages/AboutPage/AboutPage';
import PortfolioPage from './Pages/PortafolioPage/PortfolioPage';
import TestimonyPage from './Pages/TestimonioPage/TestimonioPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import BlogDetailPage from './Pages/BlogDetailPage/BlogDetailPage';
import  FaQ  from './components/Common/faq';
import LaPazPackages from './Pages/LaPazPackages/LaPazPackages';
import ScrollToTop from './components/Scrooltotop';


// Puedes agregar más como Gallery, Contact, etc.

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonio" element={<TestimonyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/LaPazPackages" element={<LaPazPackages />} />
          


        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
