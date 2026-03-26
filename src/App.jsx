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
import ApplyNow from './pages/ApplyNow';
import AIBMSP from './pages/AIBMSP';
import ComingSoon from './pages/ComingSoon';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import FailedPage from './pages/FailedPage';

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
        <Route path="/apply-now" element={<ApplyNow/>} />
        <Route path="/AIBMSP" element={<AIBMSP/>} />
        <Route path="/coming-soon" element={<ComingSoon/>} />
        <Route path="/payment/:id" element={<PaymentPage/>} />
        <Route path="/payment-success" element={<SuccessPage />} />
        <Route path="/payment-failed" element={<FailedPage />} />
      </Routes>
      <Footer /> 
    </Router>

  );
} 

export default App;
