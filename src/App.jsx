import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from './pages/Home';
import Programs from './pages/Programs';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import RefundPolicy from './pages/RefundPolicy';
import ScholarshipPolicy from './pages/ScholarshipPolicy';
import ChildProtectPolicy from './pages/ChildProtectPolicy';
import Disclaimer from './pages/Disclaimer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';

function App() {
  return (
   <Router>  
    <BackToTop />
     <ScrollToTop />   
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition/>} />
        <Route path="/refund-policy" element={<RefundPolicy/>} />
        <Route path="/scholarship-policy" element={<ScholarshipPolicy/>} />
        <Route path="/child-protection-policy" element={<ChildProtectPolicy/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
      </Routes>
      <Footer /> 
    </Router>

  );
} 

export default App;
