import location from "../assets/footer/location.png";
import message from "../assets/footer/message.png";
import phone from "../assets/footer/phone.png";
import bluedot from "../assets/policies/bluedot.png";
import pp from "../assets/policies/pp.png";

function PrivacyPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={pp} alt="Privacy Policy" />
      <div className="py-10 px-25">
        <h1 className="text-3xl font-jakarta font-bold mb-3">Privay Policy</h1>
        <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed mb-4">
          NavLakshya (“we,” “our,” or “us”) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website, apply for
          scholarships, enroll in programs, or interact with our services.
          NavLakshya operates under Streamcore Web Pvt Ltd and is dedicated to
          maintaining transparency and data security.
        </p>

        {/* Information We Collect */}
        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Information We Collect
          </h2>
          <p className=" text-grayone leading-relaxed mb-3">
            We may collect the following types of information:
          </p>

          <h3 className="font-xl font-jakarta font-bold">
            Personal Information
          </h3>
          <ul className="mb-4">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Full Name</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Email Address</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Phone Number</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Date of Birth</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Academic Details</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Address</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">School/College Information</span>
            </li>
          </ul>

          <h3 className="font-xl font-jakarta font-bold">
            Academic & Assessment Information
          </h3>
          <ul className="mb-4">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Examination results</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Scholarship test performance</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Career assessment reports</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Skill training performance data</span>
            </li>
          </ul>

          <h3 className="font-xl font-jakarta font-bold">
            Technical Information
          </h3>
          <ul className="mb-4">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">IP Address</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Browser type</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Device information</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Website usage data (via cookies and analytics tools)</span>
            </li>
           </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">How We Use Your Information</h2>
          <p className=" text-grayone leading-relaxed mb-3">We use the collected information for the following purposes:</p>
          <ul className="mb-3"> 
           <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To process scholarship applications</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To conduct online examinations and assessments</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To provide career counseling services</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To offer skill development training</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To facilitate placement and internshi opportunities</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To communicate important updates</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To improve our website and services</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">To comply with legal obligations</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
        </div>

        {/* Data Sharing & Disclosure */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Data Sharing & Disclosure</h3>
          <p className=" text-grayone leading-relaxed mb-3"> We may share your information with:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Internal team members and authorized staff</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Examination and assessment partners</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Corporate placement partners (only with consent)</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Legal authorities when required by law</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
            All data sharing is conducted securely and only for legitimate
            business purposes.
          </p>
        </div>

        {/* Data Security */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Data Security</h3>
          <p className=" text-grayone leading-relaxed mb-3">
            We implement appropriate technical and organizational security
            measures to protect your personal information against:
          </p>
          <ul className="mb-3">
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Unauthorized access</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Data alteration</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Disclosure</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Destruction</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">However, no digital platform can guarantee 100% security.</p>
        </div>

        {/* Cookies & Tracking Technologies */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Cookies & Tracking Technologies</h3>
          <p className=" text-grayone leading-relaxed mb-3">Our website may use cookies and analytics tools to:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Improve user experience</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Understand visitor behavior</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Optimize website performance</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">You may disable cookies through your browser settings.</p>
        </div>

        {/* Your Rights */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Your Rights</h3>
          <p className=" text-grayone leading-relaxed mb-3">You have the right to:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Access your personal data</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Request correction of inaccurate information</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Request deletion of your data (subject to legal requirements)</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Withdraw consent for marketing communications</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">For such requests, please contact us at: 📧 info@navlakshya.in</p>
        </div>

        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">Third-Party Links</h3>
          <p className=" text-grayone leading-relaxed mb-3">Our website may contain links to external websites. We are not responsible for the privacy practices of third-party websites.</p>
        </div>

        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">Children's Privacy</h3>
          <p className=" text-grayone leading-relaxed mb-3">NavLakshya provides services to students. If the student is below 18 years of age, parental or guardian consent may be required for participation in certain programs.</p>
        </div>

        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3"> Policy Updates</h3>
          <p className=" text-grayone leading-relaxed mb-3">We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised “Last Updated” date.</p>
        </div>

        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3"> Contact Us</h3>
          <p className=" text-grayone leading-relaxed mb-3">If you have any questions regarding this Privacy Policy, you may contact us:</p>
          <p className=" text-grayone leading-relaxed mb-3">NavLakshya <br />An initiative of Streamcore Web Pvt Ltd</p>

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
    </section>
  );
}
export default PrivacyPolicy;
