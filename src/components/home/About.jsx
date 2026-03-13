import medal from "../../assets/aboutus/medal.png";
import Reveal from '../common/Reveal';


function About() {
    return (
    <section className="relative py-24 bg-[#edf2f9]/30 px-10">

      <div className="grid lg:grid-cols-2 px-4 mx-auto gap-16 items-center ">
        {/* left part about */}
        <Reveal direction="left">
        <div>
          <h2 className="text-3xl md:text:4xl font-jakarta font-bold mb-6">🌟About NavLakshya</h2>
          <p className="text-lg font-jakarta text-grayone leading-relaxed mb-8">
            NavLakshya is an initiative of Streamcore Web Pvt Ltd, dedicated to
            building a scientific career ecosystem for students across India. We
            bridge the gap between academic excellence and professional success.
          </p>
          <div className="font-jakarta text-[16px] font-medium grid gap-4">
            <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005bb5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-4 h-4 text-primary" data-lov-id="src/pages/Home.tsx:177:22" data-lov-name="CheckCircle2" data-component-path="src/pages/Home.tsx" data-component-line="177" data-component-file="Home.tsx" data-component-name="CheckCircle2" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-primary%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                 <span>National Scholarship Exams</span>
            </div>
            <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005bb5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-4 h-4 text-primary" data-lov-id="src/pages/Home.tsx:177:22" data-lov-name="CheckCircle2" data-component-path="src/pages/Home.tsx" data-component-line="177" data-component-file="Home.tsx" data-component-name="CheckCircle2" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-primary%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                 <span>Scientific Career Counseling</span>
            </div>
            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005bb5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-4 h-4 text-primary" data-lov-id="src/pages/Home.tsx:177:22" data-lov-name="CheckCircle2" data-component-path="src/pages/Home.tsx" data-component-line="177" data-component-file="Home.tsx" data-component-name="CheckCircle2" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-primary%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            <span>Industry-Oriented Skill Development</span>
            </div>
            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005bb5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-4 h-4 text-primary" data-lov-id="src/pages/Home.tsx:177:22" data-lov-name="CheckCircle2" data-component-path="src/pages/Home.tsx" data-component-line="177" data-component-file="Home.tsx" data-component-name="CheckCircle2" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-primary%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            <span>Placement & Internship Support</span>
            </div>
          </div>

          <div className="bg-blueone text-white hover:scale-105 transition-all duration-500 relative overflow-hidden rounded-3xl p-8 mt-10">
            <img src={medal} alt="" className="h-12 w-14 text-white" />
            <span className="text-xl italic font-semibold relative z-10 ">
              "Our mission is simple — Identify Talent. Build Skills.
              Create Careers."
            </span>
          </div>
        </div>
        </Reveal>

        {/* right part cards */}
        <Reveal direction="right">
        <div>
        <div className="grid grid-cols-2 gap-6">
          {/* Card1 */}
          <div className="w-65 h-55 space-y-5 hover:scale-105 group transition-all duration-400">
          <div className="w-14 h-14 rounded-3xl bg-blueone/10 flex items-center justify-center group-hover:bg-linear-to-r from-blueone to-yellowone transition-all duration-400 ">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 text-blueone group-hover:text-white transition-all duration-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </div>
            <h1 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-blueone transition-all duration-400">Identify Talent</h1>
            <p className=" text-grayone leading-relaxed">
              Our National Scholarship Exams (AIBMSP) help discover academic
              excellence early.
            </p>
          </div>
         
          {/* Card2 */}
          <div className="w-65 h-55  hover:scale-105 group transition-all duration-400">
            <div className="w-14 h-14 rounded-3xl bg-blueone/10 flex items-center justify-center group-hover:bg-linear-to-r from-blueone to-yellowone transition-all duration-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 text-blueone group-hover:text-white transition-all duration-400"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>    
            </div>
            <h1 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-blueone transition-all duration-400">Scientific Guidance</h1>
            <p className=" text-grayone leading-relaxed">
              Professional psychometric assessments to find your true career
              calling.
            </p>
          </div>
           {/* Card3 */}
            <div className="w-65 h-55  hover:scale-105 group transition-all duration-400">
            <div className="w-14 h-14 rounded-3xl bg-blueone/10 flex items-center justify-center group-hover:bg-linear-to-r from-blueone to-yellowone transition-all duration-400">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 z-10 text-blue-600 group-hover:text-white transition-colors duration-400"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" /></svg> 
            </div>
            <h1 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-blueone transition-all duration-400">Build Skills</h1>
            <p className=" text-grayone leading-relaxed">
              Industry-aligned training programs that bridge the gap between
              degree and job.
            </p>
          </div>
          {/* Card4 */}
            <div className="w-65 h-55 hover:scale-105 group transition-all duration-400 ">
            <div className="w-14 h-14 rounded-3xl bg-blueone/10 flex items-center justify-center group-hover:bg-linear-to-r from-blueone to-yellowone transition-all duration-400">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 text-blue-600 group-hover:text-white transition-all duration-400"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>            </div>
            <h1 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-blueone transition-all duration-400">Create Careers</h1>
            <p className=" text-grayone leading-relaxed">
              Dedicated placement support connecting you with top white-collar
              opportunities.
            </p>
          </div>
        </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
export default About;
