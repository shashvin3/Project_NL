import bluedot from "../assets/policies/bluedot.png";
import scholarbanner from "../assets/policies/scholarbanner.png";

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
          The All India Bright Minds Scholarship Program (AIBMSP) is designed to identify and reward academically talented students across India through a structured, merit-based evaluation process.
          </p>
         </div>

        {/* Eligibility Criteria */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">Eligibility Criteria</h2>
          <ul className="mb-3"> 
           <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Open to students from Class 8 to Graduation</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2"/>
              <span>Applicable to all streams (Science, Commerce, Arts)</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Applicants must provide valid academic information</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>False or misleading information will lead to disqualification</span>
            </li>
        </ul>
        </div>

        {/* Selection Process */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Selection Process</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3"> Scholarship selection is based on:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Online Aptitude & Subject Examination</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Performance Score & Ranking</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Eligibility Verification</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Merit List Evaluation</span>
            </li>
          </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           All results declared by NavLakshya shall be final.
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
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">Candidates may be disqualified for:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Cheating or unfair practices</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Impersonation</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Submission of false documents</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Violation of exam guidelines</span>
            </li>
          </ul>
        </div>

        {/* Policy Modification */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">Policy Modification</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">NavLakshya reserves the right to modify scholarship structure, eligibility, or benefits without prior notice.</p>
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
                  <li key={items}                    
                      href={`#${items}`}
                      className="text-sm text-grayone hover:text-blueone transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-grayone/40 group-hover:bg-blueone transition-colors shrink-0"></span>
                      {items}
                  </li>
                ))}
              </ul>
            </div>
      </div>
      </div>
    </div>
    </section>
  );
}
export default ScholarshipPolicy;
