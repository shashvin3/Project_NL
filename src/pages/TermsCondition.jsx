import location from "../assets/footer/location.png";
import message from "../assets/footer/message.png";
import phone from "../assets/footer/phone.png";
import bluedot from "../assets/policies/bluedot.png";

function TermsCondition() {
  return (
    <section className="bg-[#fffafc]">
      <div className="py-10 px-25">
        <h1 className="text-3xl font-jakarta font-bold mb-3">
          Terms & Conditions
        </h1>
        <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed mb-4">
          Welcome to NavLakshya. These Terms & Conditions govern your access to
          and use of our website, scholarship programs, career counseling
          services, skill development courses, and placement assistance
          services. By accessing or using our services, you agree to comply with
          and be bound by these Terms.
        </p>

      <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
             About NavLakshya
          </h2>
          <p className=" text-grayone leading-relaxed mb-3">
           NavLakshya is an education and career empowerment initiative operated under Streamcore Web Pvt Ltd. Our services include:
          </p>
           <ul className="mb-4">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">All India Bright Minds Scholarship Program (AIBMSP)</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Career Counseling Services</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Skill Development Programs</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Internship & Placement Assistance</span>
            </li>
        </ul>
      </div>

       {/*  Eligibility */}
        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Eligibility
          </h2>
         <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Students applying for scholarship programs must provide accurate academic details.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                For candidates below 18 years of age, parental/guardian consent may be required.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                NavLakshya reserves the right to verify documents and eligibility criteria.
              </span>
            </li>
        </ul>
     </div>

        {/* Registration & Account Responsibility */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Registration & Account Responsibility
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
            When registering on our website:
          </p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                You must provide true, accurate, and complete information.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                You are responsible for maintaining the confidentiality of your login credentials.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Any misuse of account information is solely your responsibility.
              </span>
            </li>
        </ul>
          <p className=" text-grayone leading-relaxed mb-3">
           We reserve the right to suspend or terminate accounts found to contain false or misleading information.
          </p>
        </div>

        {/*  Scholarship Program Terms */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Scholarship Program Terms
          </h3>
         <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Scholarship awards are based on merit, eligibility criteria, and evaluation standards.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Examination results and merit lists declared by NavLakshya shall be final.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Scholarship benefits may include financial assistance, fee waivers, recognition certificates, or career support services.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Scholarship amounts, benefits, and selection criteria may vary by program.</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
           NavLakshya reserves the right to modify program structure without prior notice.
          </p>
        </div>

        {/*  Payments & Fees */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
             Payments & Fees
          </h3>
        <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Registration fees, examination fees, or program fees (if applicable) must be paid through authorized payment gateways.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Fees once paid are generally non-refundable unless specified under the Refund Policy.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Any payment disputes must be raised within 7 working days.</span>
            </li>
          </ul>
        </div>

       {/* Career Counseling & Placement Services */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Career Counseling & Placement Services
          </h3>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">NavLakshya provides guidance and assistance but does not guarantee job placement.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Placement opportunities depend on candidate performance, eligibility, and employer requirements.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               We are not responsible for employment decisions made by third-party recruiters or companies.
              </span>
            </li>
        </ul>
        </div>

         {/*Intellectual Property */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Intellectual Property
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
            All website content including:
          </p>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Logos</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               Text
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
              Graphics
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Course materials
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Scholarship content
              </span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
           are the intellectual property of NavLakshya or its parent company.
          </p>
           <p className=" text-grayone leading-relaxed mb-3">
           Unauthorized reproduction, distribution, or copying is strictly prohibited.
          </p>
        </div>

         {/* Code of Conduct */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Code of Conduct
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
           Users agree:
          </p>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Not to misuse the examination platform</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               Not to engage in cheating, impersonation, or fraudulent activities
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
              Not to upload harmful or illegal content
              </span>
            </li>
           </ul>
           <p className=" text-grayone leading-relaxed mb-3">
           Violation may result in disqualification or permanent suspension.
          </p>
        </div>

         {/* Limitation of Liability */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Limitation of Liability
          </h3>
           <p className=" text-grayone leading-relaxed mb-1">
          NavLakshya shall not be liable for:
          </p>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Technical errors during online examinations</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               Website downtime
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
             Indirect or consequential damages
              </span>
           </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
             Loss of data due to circumstances beyond our control
              </span>
            </li>
           </ul>
           <p className=" text-grayone leading-relaxed mb-3">
             We provide services on a best-effort basis.
          </p>  
        </div>

        {/* Privacy */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Privacy
          </h3>
           <p className=" text-grayone leading-relaxed mb-3">
         Your use of our services is also governed by our Privacy Policy. We are committed to protecting user data.
          </p>
        </div>

        {/* Termination of Services*/}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Termination of Services
          </h3>
           <p className=" text-grayone leading-relaxed mb-1">
          We reserve the right to:
          </p>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Cancel registrations</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               Disqualify candidates
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
             Terminate services
              </span>
           </li>
        </ul>
           <p className=" text-grayone leading-relaxed mb-3">
             if any violation of these Terms is detected.
          </p>  
        </div>

        {/*  Changes to Terms */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Changes to Terms
          </h3>
           <p className=" text-grayone leading-relaxed mb-3">
             NavLakshya may update these Terms & Conditions at any time. Continued use of our website constitutes acceptance of updated terms.
          </p>
        </div>

         {/* Governing Law */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Governing Law
          </h3>
           <p className=" text-grayone leading-relaxed mb-3">
            These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Contact Us
          </h3>
          <p className=" text-grayone leading-relaxed mb-2">
           For any queries regarding these Terms & Conditions:
          </p>
          <p className=" text-grayone leading-relaxed mb-3">
            NavLakshya <br />
            An initiative of Streamcore Web Pvt Ltd
          </p>
          <ul className="space-y-3">
              <li className="flex gap-2">
                <img src={message} alt="" className="w-5 h-5" />
                <span className="text-sm text-grayone font-jakarta">
                  info@navlakshya.in
                </span>
              </li>
              <li className="flex gap-2">
                <img src={phone} alt="" className="w-5 h-5" />
                <span className="text-sm text-grayone font-jakarta">
                  +91-XXXXXXXXXX
                </span>
              </li>
              <li className="flex gap-2">
                <img src={location} alt="" className="w-5 h-5" />
                <span className="text-sm text-grayone font-jakarta">
                  Streamcore Web Pvt Ltd Office,India
                </span>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default TermsCondition;
