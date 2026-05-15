import bluedot from "../assets/policies/bluedot.png";
import scholarbanner from "../assets/policies/scholarbanner.png";
import { Link } from "react-router-dom";

function ScholarshipPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={scholarbanner} alt="Privacy Policy" />
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-7">
        Scholarship Policy
        </h1>
        <div className="flex gap-10 items-start">
        <div className="flex-1 space-y-10">
        {/*  Purpose */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
          Purpose
          </h2>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           The AIBMSP identifies and rewards academically talented students across India through a structured, merit-based evaluation process — ensuring academic excellence is recognized, supported, and directed toward meaningful career outcomes.
          </p>
         </div>

        {/* Eligibility Criteria */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">Eligibility Criteria</h2>
          <ul className="mb-3"> 
           <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Open to students from Class 8 through Graduation across India</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2"/>
              <span>Applicable to all streams including Science, Commerce and Arts</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Applicants must provide valid, accurate, and verifiable academic information</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Submission of false or misleading information will result in immediate disqualification</span>
            </li>
        </ul>
        </div>

        {/* Selection Process */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Selection Process</h3>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Online Aptitude and Subject Examination conducted through the NavLakshya platform</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Performance Score and National Ranking based on examination results</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Eligibility Verification of all submitted academic documents</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Merit List Evaluation and final scholarship determination</span>
            </li>
          </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           All results declared by NavLakshya are final. No appeals or re-evaluations will be entertained except in cases of documented technical failure. Students may submit a written request for review to info@navlakshya.in within 3 working days of the result date
          </p>
        </div>

        {/* Scholarship Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1"> Scholarship Benefits</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           Scholarship awards may include:
          </p>
          <ul className="mb-3">
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Financial assistance</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Recognition certificates</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Career counseling support</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Skill development benefits</span>
            </li>
          </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">Scholarship type and value may vary by category and program year.</p>
        </div>

        {/* Disqualification Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Disqualification Policy</h3>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Engaging in cheating or any form of unfair practice during the examination</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Impersonation or allowing another person to appear in one's place</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Submission of false, forged, or misleading documents</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Violation of examination guidelines or platform conduct rules</span>
            </li>
          </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           Disqualification decisions made by NavLakshya are final. Any attempt to circumvent this policy may result in permanent ineligibility from future programs.          </p>
        </div>

        {/* Policy Modification */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Policy Modification</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">NavLakshya reserves the right to modify the scholarship program structure, eligibility criteria, or examination format at any time. Changes will be communicated through our official website.</p>
         <ul className="space-y-3">
          <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-5 shrink-0 text-blueone"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-sm text-grayone font-jakarta">NavLakshya</span>
            </li>
            <li className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
              <span className="text-sm text-grayone font-jakarta">info@navlakshya.com</span>
            </li>
            <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>          
              <span className="text-sm text-grayone font-jakarta">+91-9415337435</span>
            </li>
          </ul>
        </div>
        </div> 

       <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold font-jakarta uppercase tracking-widest text-grayone mb-4">
                On This Page
              </h3>
              <ul className="space-y-2">
                {["Purpose","Eligibility Criteria"," Selection Process" ," Scholarship Benefits" ,"Disqualification Policy",
                "Policy Modification"].map((items) => (
                  <li key={items} className="text-sm text-grayone hover:text-blueone transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-grayone/40 group-hover:bg-blueone transition-colors shrink-0"></span>
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
export default ScholarshipPolicy;
