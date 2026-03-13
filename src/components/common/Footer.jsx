import logo from "../../assets/logo/logo.png";
import location from "../../assets/footer/location.png";
import message from "../../assets/footer/message.png";
import phone from "../../assets/footer/phone.png";
import instagram from "../../assets/footer/instagram.png";
import linkedin from "../../assets/footer/linkedin.png";
import facebook from "../../assets/footer/facebook.png";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <section className="pb-15 bg-[#d3e0fd]/10 mx-auto py-1 px-4 lg:px-8">
        <hr className="border-gray-300" />
        <div className="px-15 pt-15">
          <div className="grid gap-12 lg:grid-cols-4 mb-14">
        {/* NavLakshya Info */}
        <div className="space-y-6">
          <img src={logo} alt="" className="h-20 w-38 object-contain" />
          <p className="text-sm leading-relaxed text-grayone font-jakarta mb-3">
            NavLakshya is a structured career development ecosystem designed to
            guide students from academic excellence to professional success.
          </p>
          <div className="flex gap-7 pt-4">
            <a href="#" className="border rounded-xl p-2 border-gray-300">
              <img src={instagram} alt="" className="w-5 h-5" />
            </a>
            <a href="#" className="border rounded-xl p-2 border-gray-300">
              <img src={facebook} alt="" className="w-5 h-5" />
            </a>
            <a href="#" className="border rounded-xl p-2 border-gray-300">
              <img src={linkedin} alt="" className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Programs */}
        <div className="space-y-6">
          <h3 className="font-bold text-sm tracking-widest uppercase">Our Programs</h3>
          <ul className="space-y-3">
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/programs">Scholarship Program (AIBMSP)</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/programs">Career Counseling</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/programs">Skill Development</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/programs">Placement Assistance</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/scholarship-policy">Scholarship Policy</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/child-protection-policy">Child Protection Policy</Link></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="font-bold text-sm tracking-widest uppercase">Quick Links</h3>
          <ul className="space-y-3">
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/">Home</Link> </li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/about">About NavLakshya</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/contact">Contact Us</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/terms-condition">Terms & Conditions</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/refund-policy">Refund Policy</Link></li>
            <li className="text-sm text-grayone font-jakarta hover:text-blue-400"><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
        {/* get in touch */}
        <div className="space-y-6">
          <h3 className="font-bold text-sm tracking-widest uppercase font-jakarta">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <img src={message} alt="" className="w-5 h-5" />
              <span className="text-sm text-grayone font-jakarta">info@navlakshya.in</span>
            </li>
            <li className="flex gap-2">
              <img src={phone} alt="" className="w-5 h-5" />
              <span className="text-sm text-grayone font-jakarta">+91-XXXXXXXXXX</span>
            </li>
            <li className="flex gap-2">
              <img src={location} alt="" className="w-5 h-5" />
              <span className="text-sm text-grayone font-jakarta">Streamcore Web Pvt Ltd Office,India</span>
            </li>
          </ul>
        </div>
      </div>
     <hr className="text-gray-300" />

      {/* Copyright */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row mt-16">
        <span className="text-xs text-grayone font-jakarta">
          © 2026 NavLakshya. Education & Career Empowerment Initiative of
          Streamcore Web Pvt Ltd. All rights reserved.
        </span>
        <div className="text-grayone text-xs font-jakarta">
          Made for students by
        <span className="font-bold text-xs text-black pl-2">Streamcore Web</span>
        </div>
         </div>
        </div>
    </section>
  );
}
export default Footer;
