import bluetick from "../assets/bluetick.png";
import placementcell from "../assets/policies/placementcell.png";
import { Link } from "react-router-dom";

function PlacementCell() {
    const services = [
    "Employer Student Matching — your profile mapped to roles that genuinely fit your skills and direction",
    "Corporate Referral Network — direct relationships with hiring managers across industries",
    "Resume Writing and Profile Optimization — so the first impression your profile creates is the one your capability deserves",
    "Mock Interview Preparation — structured practice designed around your target industry",
    "Internship and Job Assistance — support for both your first employment and internship placement"
  ];

  const faqs = [
    {
      q: "What does the NavLakshya Placement Cell do?",
      a: "The NavLakshya Placement Cell connects enrolled students with employers through a network of 80 or more hiring partners across startups, SMEs, and corporate organizations. It provides employer-student matching, corporate referral network access, resume writing and profile optimization, mock interview preparation, and internship and job assistance.",
    },

    {
      q: "Is placement support free at NavLakshya?",
      a: "Yes. Placement Cell support is free for all students enrolled in NavLakshya Skill Development programs. There is no additional placement facilitation fee.",
    },

    {
      q: "Does NavLakshya guarantee job placement?",
      a: "NavLakshya provides access, preparation, and employer connections but does not guarantee job placement or any specific employment outcome. Placement outcomes depend on individual candidate performance, eligibility, and the decisions of hiring organizations. NavLakshya's role is to open the right doors — the outcome depends on the candidate's preparation and performance."
    },

    {
      q: "How many companies does NavLakshya have hiring connections with?",
      a: "NavLakshya has 80 or more hiring connections across startups, SMEs, and established organizations. These connections have been built relationship by relationship with employers who trust NavLakshya students to arrive prepared and skilled."
    },

    {
      q: "What is an industry interview drive?",
      a: " An industry interview drive is an organized access event where multiple employers come directly to evaluate NavLakshya students. Rather than students applying to individual companies through cold applications, the drive brings the employers to the students — making the first contact significantly more effective for both sides."
    },

    {
      q: "What documents or profiles does the Placement Cell help prepare?",
      a: "The Placement Cell provides resume writing and profile optimization support — ensuring that the way your skills and experience are presented creates the first impression your capability deserves. This includes resume structure, professional summary writing, and alignment of your profile to the specific roles you are targeting."
    },

    {
      q: "Who is eligible for the NavLakshya Placement Cell?",
      a: "The Placement Cell is available to all students enrolled in NavLakshya Skill Development programs. Eligibility is tied to program enrollment rather than a separate application process."
    }
  ];



  return (
    <section className="bg-blue-50">
      <img
        src={placementcell}
        alt="Placement Cell"
        className="w-full object-cover"
      />

      <div className="container mx-auto px-4 py-16 space-y-10">
        <div className="text-center max-w-4xl mx-auto ">
          <h1 className="text-2xl md:text-5xl font-jakarta font-bold mb-3">
            Placement Cell
          </h1>
          <p className="font-bold text-md md:text-lg font-jakarta text-blueone leading-relaxed mb-4">
            Free for Enrolled Students
          </p>
          <p className="font-bold text-md md:text-lg font-jakarta text-grayone leading-relaxed mb-4">
            Available to all NavLakshya Skill Development students
          </p>
        </div>

        <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-6 space-y-4">
          <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
           Most students who struggle to find employment after graduation are not unprepared. They are invisible.
           Their resume sits in a pile. Their applications go unread. They have the skills a role requires but no relationship with the person making the hiring decision and no system for building one.
          </p>
        </div>

          <section className="py-4 bg-blue-50 rounded-2xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold font-jakarta text-blueone mb-10">
              Placement Services
            </h2>
            <div className="grid gap-5">
              {services.map((item) => (
                <div key={item} className=" bg-white rounded-2xl p-5 shadow-md">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </section>


           <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-8">
  <h4 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
        Proven Support
  </h4>
         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm min-h-16">
            <img src={bluetick} alt="" className="w-4 h-4" />
              <span className="font-jakarta font-medium text-sm self-center">80 or more hiring connections across startups, SMEs and established organizations</span>
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm min-h-16">
            <img src={bluetick} alt="" className="w-4 h-4 mt-1 shrink-0" />
              <span className="font-jakarta font-medium text-sm self-center">Industry Interview Drives where employers come directly to evaluate NavLakshya students</span>
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm min-h-16">
            <img src={bluetick} alt="" className="w-4 h-4 mt-1 shrink-0" />
              <span className="font-jakarta font-medium text-sm self-center">Skill Based Job Mapping — every placement recommendation matched to what you have actually built</span>
            </li>
          </ul>
           </div>

          <section className="py-10 bg-blue-50 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white/90 rounded-2xl p-6 cursor-pointer"
                >
                  <summary className="font-semibold text-[#0c121a] font-jakarta">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-grayone leading-relaxed font-jakarta">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
          </section>

        <div className="text-center">
        <Link to="/contact" className='inline-flex items-center justify-center rounded-full text-sm font-medium py-3 px-5 lg:px-4 bg-blueone text-white hover:bg-blueone/80 transition-all duration-300'>Connect with Placement Team</Link>
        </div>

      </div>
    </section>
  );
}

export default PlacementCell;
