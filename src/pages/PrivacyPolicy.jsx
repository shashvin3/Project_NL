import bluedot from "../assets/policies/bluedot.png";
import pp from "../assets/policies/pp.png";
import { Link } from "react-router-dom";


function PrivacyPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={pp} alt="Privacy Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-8">Privay Policy</h1>

         <div className="flex gap-10 items-start">
        <div className="flex-1 space-y-10">

        <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-6">
        <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
          NavLakshya is committed to protecting your privacy. This policy explains clearly how we collect, use, and safeguard your information when you interact with our website, programs, and services.
        </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Information We Collect
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
            To deliver our services, we may collect Personal Information (name, email, phone, date of birth, academic details, address, school or college), Academic and Assessment Information (examination results, career assessment reports, skill training data), and Technical Information (IP address, browser type, device information, and website usage data through cookies and analytics tools).
          </p>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">How We Use Your Information</h2>
         <ul className="mb-3"> 
           <li className="flex items-start gap-2">
              <img src={bluedot} className="w-2 h-2 mt-2" />
              <span>To process scholarship applications and conduct online examinations</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} className="w-2 h-2 mt-2" />
              <span>To provide career counseling and skill development services</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} className="w-2 h-2 mt-2" />
              <span>To facilitate placement and internship opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} className="w-2 h-2 mt-2" />
              <span>To communicate important updates, results, and program information</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} className="w-2 h-2 mt-2" />
              <span>To improve our website, programs, and the overall user experience</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} className="w-2 h-2 mt-2" />
              <span>To comply with applicable legal obligations</span>
            </li>
          </ul>
          <p className="text-grayone lg:text-lg leading-relaxed mb-3">
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
        </div>

        {/* Data Sharing & Disclosure */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Data Sharing & Disclosure</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">We share data only where necessary and always with appropriate safeguards in place — with internal staff, examination partners, corporate placement partners (with your consent only), and legal authorities when required by law.
          </p>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Data Security</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           We implement appropriate technical and organizational security measures against unauthorized access, data alteration, disclosure, and destruction. No digital platform can guarantee absolute security — we encourage users to take reasonable precautions when sharing information online.
          </p>
        </div>

        {/* Cookies & Tracking Technologies */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Cookies & Tracking Technologies</h3>
          <p className=" text-grayone leading-relaxed mb-3">Our website uses cookies and analytics tools to improve browsing experience and optimize performance. You may disable cookies through your browser settings at any time.</p>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Your Rights</h3>
          <ul className="mb-3">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Access the personal data we hold about you</span>
            </li>
             <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Request correction of any inaccurate information</span>
            </li>
             <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Request deletion of your data subject to legal requirements</span>
            </li>
             <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Withdraw consent for marketing communications at any time</span>
            </li>
          </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">For such requests, please contact us at: info@navlakshya.com</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">Third-Party Links</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">Our website may contain links to external websites. NavLakshya is not responsible for the privacy practices, content, or security of any third-party website.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">Children's Privacy</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">For students below 18, parental or guardian consent may be required for certain programs. We handle the data of minors responsibly and in full compliance with applicable laws.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3"> Policy Updates</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">We may update this Privacy Policy periodically. Continued use of our services after any changes constitutes your acceptance of the updated terms.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3"> Contact Us</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">If you have any questions regarding this Privacy Policy, you may contact us:</p>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">NavLakshya</p>

          <ul className="space-y-3">
            <li className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
              <span className="text-sm text-grayone font-jakarta">info@navlakshya.com</span>
            </li>
            <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>          
              <span className="text-sm text-grayone font-jakarta">+91-9415337435</span>
            </li>
            <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-sm text-grayone font-jakarta"> Office No. 279, Panchsheel Greens 2, Greater Noida West, Uttar Pradesh — 201318, India</span>
            </li>
          </ul>
        </div>
       
        

        </div>
         <div className="hidden lg:block w-64 shrink-0">
         <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold font-jakarta uppercase tracking-widest text-grayone mb-4">
          On This Page</h3>
          <ul className="space-y-2">
          {["Information We Collect","Usage","Data Sharing","Data Security","Cookies & Tracking Technologies","Your Rights","Third-Party Links","Children's Privacy","Policy Updates", "Contact Us"].map((items) =>(
          <li key={items} className="text-sm text-grayone hover:text-blueone transition-colors duration-200 flex items-start gap-2 group">
          <span className="w-1 h-1 mt-2 rounded-full bg-grayone/40 group-hover:bg-blueone transition-colors shrink-0"></span>
          {items}
          </li>
          ))}
          </ul>
         </div>
        </div>
       </div> 
       <div className="text-center mt-10">
        <Link to="/contact" className='inline-flex items-center justify-center rounded-full text-sm font-medium py-3 px-5 lg:px-4 bg-blueone text-white hover:bg-blueone/80 transition-all duration-300'>Contact Us Now</Link>
        </div>
      </div>
    </section>
  );
}
export default PrivacyPolicy;
