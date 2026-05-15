import bluedot from "../assets/policies/bluedot.png";
import cpbanner from "../assets/policies/childprotectbanner.png";
import { Link } from "react-router-dom";


function ChildProtectPolicy() {
  return (
    <section className="bg-[#fffafc] min-h-screen">
      <img src={cpbanner} alt="Privacy Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-jakarta font-bold mb-7">
          Child Protection Policy
        </h1>     
      <div className="flex gap-10 items-start">
       <div className="flex-1 space-y-10">
        {/* Applicability */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-4 ">
            Applicability
          </h2>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           This policy applies to every individual and entity associated with NavLakshya — employees, management, freelancers, consultants, volunteers, partners, vendors, and anyone acting on behalf of NavLakshya across all online and offline engagements.</p>
        </div >

        {/*  Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Introduction
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           NavLakshya regularly engages with students below 18 years of age. We uphold universal child safeguarding principles aimed at protecting their academic and emotional wellbeing, personal dignity, and professional aspirations across all programs.
          </p>
        </div>

        {/* Objectives of the Child Protection Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Objectives
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           The objectives of this policy are to:
          </p>
          <ul className="mb-3">
            {[ "Promote awareness of child rights and protection principles across all stakeholders","Prevent all forms of child abuse including physical, emotional, sexual, digital, and neglect","Create structured mechanisms for reporting and responding to child protection concerns","Ensure legal and ethical compliance with all applicable child protection laws in India","Safeguard the dignity, privacy, and free will of every student"].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
         </div>

        {/*Code of Conduct */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
           Code of Conduct
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
           A. Staff Must:
          </p>
           <ul className="mb-3">
            {["Foster an open and respectful environment allowing children to freely express concerns","Maintain professional boundaries at all times in all interactions with students","Immediately report any suspicious or inappropriate behavior involving a student",
              "Maintain confidentiality of all student data and personal information","Use technology responsibly and never access or distribute inappropriate content"].map((item) => (
              <li className="flex items-start gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
                <span>{item}</span>
              </li>
            ))}
            </ul>
            <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
             B. Staff Must Not:
          </p>
           <ul className="mb-3">
            {["Engage in inappropriate physical contact with any student","Use abusive, humiliating, or degrading language toward any student","Develop any form of personal, sexual, or inappropriate relationship with a child",
               "Take photographs or recordings that compromise a child's dignity or privacy","Ask children to meet privately outside authorized and supervised spaces"].map((item) => (
              <li className="flex items-start gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
                <span>{item}</span>
              </li>
            ))}
            </ul>
        </div>

         {/* Digital Safety*/}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
           Digital Safety
          </h3>
           <ul className="mb-3">
            {["All digital communication with students must occur through official NavLakshya platforms only","Staff must not connect with students through personal social media accounts","Recording of any session requires prior written consent from all relevant parties"].map((item) => (
              <li className="flex items-start gap-2">
                <img src={bluedot} className="w-2 h-2 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

          {/* Reporting & Accountability */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3"> Reporting & Accountability</h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">Every staff member and stakeholder must report any suspected or confirmed violation immediately. All safeguarding reports must be sent to the dedicated safeguarding email — not the general inquiry inbox — to ensure reports are handled with the urgency and confidentiality they require.</p>
          <ul className="space-y-3">
            <li className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
              <span className="text-sm text-grayone font-jakarta">safeguarding@navlakshya.in</span>
            </li>
            <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>          
              <span className="text-sm text-grayone font-jakarta">+91 9415337435</span>
            </li>
            <li className="flex gap-2">
              <p className="text-blueone font-bold">Child Protection Officer :</p>
              <span className="text-sm text-grayone font-jakarta">  Anjali Sharma, Head of Counseling</span>
            </li>
          </ul>
         </div>

          {/* Non-Compliance & Disciplinary Action */}
         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
             Non-Compliance
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
          Any confirmed violation may result in immediate suspension, termination of employment or partnership, legal action under applicable Indian law, and permanent ineligibility from future NavLakshya engagements.
          </p>
          </div>

          
          {/* Commitment Statement */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-5">
           Our Commitment
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
            NavLakshya is committed to creating a safe, respectful, and empowering environment for every student. Protecting children is a shared responsibility. Every individual associated with NavLakshya must uphold the highest ethical standards at all times, without exception.
          </p>
          </div>
        </div>


           <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold font-jakarta uppercase tracking-widest text-grayone mb-4">
                On This Page
              </h3>
              <ul className="space-y-2">
                {["Applicability","Introduction","Objectives","Code of Conduct","Digital Safety",  "Reporting & Accountability ",
                "Non-Compliance", " Our Commitment"
                  ].map((items) => (
                  <li key={items} 
                   className="text-sm text-grayone hover:text-blueone transition-colors duration-200 flex items-start gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-grayone/40 group-hover:bg-blueone transition-colors shrink-0 mt-2"></span>
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
export default ChildProtectPolicy;
