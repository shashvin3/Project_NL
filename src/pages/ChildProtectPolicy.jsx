import bluedot from "../assets/policies/bluedot.png";
import cpbanner from "../assets/policies/childprotectbanner.png";

function ChildProtectPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={cpbanner} alt="Privacy Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-3">
          Child Protection Policy
        </h1>

        {/* Applicability */}
        <div>
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Applicability
          </h2>
          <p className=" text-grayone leading-relaxed mb-3">
            This Child Protection Policy applies to all:
          </p>
          <ul className="mb-3">
            {[
              "Employees", "Management Members", "Freelancers", "Consultants", "Operational Partners", "Business Associates", "Volunteers",  "Institutional Partners",  "Vendors", "Any individual or entity associated with NavLakshya",
               ].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">The policy is enforceable across all online and offline engagements conducted under NavLakshya initiatives.</p>
        </div >

        {/*  Introduction */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Introduction
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
            NavLakshya is committed to enhancing educational and career opportunities for students across India. As an organization that engages with minors (students below 18 years of age), we uphold universal child safeguarding principles aimed at protecting their:
          </p>
          <ul className="mb-3">
            {[
              "Academic well-being", "Emotional well-being", "Social development", "Personal dignity",
               "Professional aspirations"].map((item) => (
              <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
           NavLakshya ensures safe environments for students seeking:
          </p>
           <ul className="mb-3">
            {[
              "Scholarship participation", "Career counseling", "Skill development programs", "Mentorship support",
              "Placement assistance"].map((item) => (
              <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
            This policy establishes clear behavioral, communication, and operational guidelines for all stakeholders interacting with children through digital platforms, physical sessions, workshops, examinations, or outreach activities.
          </p>
        </div>

        {/* Objectives of the Child Protection Policy */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Objectives of the Child Protection Policy
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           The objectives of this policy are to:
          </p>
          <ul className="mb-3">
            {[ "Promote awareness of child rights and child protection principles", "Prevent all forms of child abuse (physical, emotional, sexual, digital, or neglect)", "Create structured mechanisms for reporting child protection concerns", "Ensure legal and ethical compliance with child protection laws",
            "Safeguard the dignity, privacy, and free will of all participating students"
             ].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
         </div>

        {/*  Vision for Child Protection */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
             Vision for Child Protection
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           NavLakshya aims to create a “Child-Safe Ecosystem” where:
          </p>
           <ul className="mb-3">
            {["Children are respected and protected","Students feel safe to express concerns","Staff are trained and accountable", "Communication is ethical and transparent",
             "Digital platforms are secure"
             ].map((item) => (
              <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
          We strive to build environments where students are empowered while being safeguarded at all times.          </p>
        </div>

        {/*Code of Conduct */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
           Code of Conduct
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           A. Staff, Employees & Duty Bearers Must:
          </p>
           <ul className="mb-3">
            {["Foster an open and respectful culture that allows children to freely express concerns.", "Encourage inclusion without discrimination based on gender, disability, religion, caste, ethnicity, or economic background.", "Maintain professional boundaries at all times.","Avoid compromising situations when interacting with children.",
              "Immediately report any suspicious or inappropriate behavior.", "Maintain confidentiality of student data and personal information.", "Ensure safe supervision during physical events, workshops, travel, or training programs.", "Follow transparent communication practices with minors.","Use technology responsibly and never create, access, or distribute inappropriate content.",
             "Document any incident involving student safety concerns."
             ].map((item) => (
              <li className="flex items-start gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
            </ul>
            <p className=" text-grayone leading-relaxed mb-3">
             B. Staff, Employees & Duty Bearers Must NOT:
          </p>
           <ul className="mb-3">
            {["Engage in inappropriate physical contact.", "Sleep alone in the same room with any child.","Use corporal punishment or tolerate its use.","Use abusive, humiliating, or degrading language.","Discriminate based on race, gender, religion, disability, or any other status.",
              "Develop any form of sexual or inappropriate relationship with a child.", "Give direct cash or personal gifts to children.", "Ask children to meet privately outside authorized spaces.", "Take photographs that compromise a child’s dignity or privacy.","Engage children in personal tasks unrelated to programs.",
               "Work under the influence of alcohol or intoxicating substances while on duty."].map((item) => (
              <li className="flex items-start gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5 " />
                <span className="text-sm">{item}</span>
              </li>
            ))}
            </ul>
        </div>

         {/* Behaviour Protocols for Volunteers & Visitors */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
             Behaviour Protocols for Volunteers & Visitors
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           In addition to the above guidelines:
          </p>
           <ul className="mb-3">
            {["Do not collect personal information of children without authorization.","Do not upload photos/videos of children without prior consent from NavLakshya authorities and guardians (where applicable).",
               "Do not initiate personal communication outside official channels.","Do not encourage emotional dependency or inappropriate familiarity." ].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

         {/* Digital Safety & Online Protection */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
           Digital Safety & Online Protection
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           Since NavLakshya operates through online exams, counseling, and training:
          </p>
           <ul className="mb-3">
            {["All digital communication must occur via official platforms.","Staff must not connect with students through personal social media accounts.","Student data must be protected under privacy and cybersecurity standards.",
               "Recording of sessions requires prior consent."
             ].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

         {/* Parental Consent */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
             Parental Consent
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
          For participants below 18 years:
          </p>
           <ul className="mb-3">
            {["Parental/guardian consent may be required for registration and participation.",
              "Parents may request relevant information regarding their child’s engagement."
             ].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          </div>


          {/* Reporting & Accountability */}
          <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3"> Reporting & Accountability</h3>
          <p className=" text-grayone leading-relaxed mb-3">All staff, partners, and stakeholders are obligated to report any suspected or confirmed violation of this policy immediately.</p>
          <p className=" text-grayone leading-relaxed mb-2">Reports may be made to:</p>
          <p className="font-semibold leading-relaxed mb-2">Child Protection Officer – NavLakshya</p>
          <ul className="space-y-3">
            <li className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
              <span className="text-sm text-grayone font-jakarta">info@navlakshya.in</span>
            </li>
            <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>          
              <span className="text-sm text-grayone font-jakarta">+91-XXXXXXXXXX</span>
            </li>
          </ul>
          <p className=" text-grayone leading-relaxed mb-2">Failure to report concerns may result in disciplinary action.</p>
        </div>

          {/* Non-Compliance & Disciplinary Action */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Violation of this policy may lead to:
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
          For participants below 18 years:
          </p>
           <ul className="mb-3">
            {["Suspension","Termination of employment or partnership","Legal action","Blacklisting from future engagements"
             ].map((item) => (
              <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
           <p className=" text-grayone leading-relaxed mb-3">
          NavLakshya reserves the right to take strict action to protect children.
          </p>
          </div>

            {/* Policy Review */}
        <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Policy Review
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
          This Child Protection Policy will be reviewed periodically to ensure compliance with:
          </p>
           <ul className="mb-3">
            {["Indian child protection laws","Digital safety standards","Educational regulatory requirements"
             ].map((item) => (
              <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          </div>
          
          {/* Commitment Statement */}
          <div>
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-5">
           Commitment Statement
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           NavLakshya is committed to creating a safe, respectful, and empowering environment for every student. Protecting children is a shared responsibility, and every stakeholder must uphold the highest ethical standards.
          </p>
          </div>
      </div>
    </section>
  );
}
export default ChildProtectPolicy;
