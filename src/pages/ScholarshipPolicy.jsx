import bluedot from "../assets/policies/bluedot.png";
import scholarbanner from "../assets/policies/scholarbanner.png";

function ScholarshipPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={scholarbanner} alt="Privacy Policy" />
      <div className="py-10 px-25">
        <h1 className="text-3xl font-jakarta font-bold mb-3">Scholarship Policy</h1>
        
        {/*  Purpose */}
        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
             Purpose
          </h2>
          <p className=" text-grayone leading-relaxed mb-3">
          The All India Bright Minds Scholarship Program (AIBMSP) is designed to identify and reward academically talented students across India through a structured, merit-based evaluation process.
          </p>
         </div>

        {/* Eligibility Criteria */}
        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">Eligibility Criteria</h2>
          <ul className="mb-3"> 
           <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Open to students from Class 8 to Graduation</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Applicable to all streams (Science, Commerce, Arts)</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Applicants must provide valid academic information</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">False or misleading information will lead to disqualification</span>
            </li>
        </ul>
        </div>

        {/* Selection Process */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Selection Process</h3>
          <p className=" text-grayone leading-relaxed mb-3"> Scholarship selection is based on:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Online Aptitude & Subject Examination</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Performance Score & Ranking</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Eligibility Verification</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Merit List Evaluation</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
           All results declared by NavLakshya shall be final.
          </p>
        </div>

        {/* Scholarship Benefits */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1"> Scholarship Benefits</h3>
          <p className=" text-grayone leading-relaxed mb-3">
           Scholarship awards may include:
          </p>
          <ul className="mb-3">
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Financial assistance</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Recognition certificates</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Career counseling support</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Skill development benefits</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">Scholarship type and value may vary by category and program year.</p>
        </div>

        {/* Disqualification Policy */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Disqualification Policy</h3>
          <p className=" text-grayone leading-relaxed mb-3">Candidates may be disqualified for:</p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Cheating or unfair practices</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Impersonation</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Submission of false documents</span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Violation of exam guidelines</span>
            </li>
          </ul>
        </div>

        {/* Policy Modification */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">Policy Modification</h3>
          <p className=" text-grayone leading-relaxed mb-3">NavLakshya reserves the right to modify scholarship structure, eligibility, or benefits without prior notice.</p>
        </div>
      </div>
    </section>
  );
}
export default ScholarshipPolicy;
