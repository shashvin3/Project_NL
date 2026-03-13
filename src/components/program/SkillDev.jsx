import prog3 from '../../assets/programimage/prog3.jfif'
import Reveal from '../common/Reveal';

function SkillDev() {
  return (
    <section className="text-center transparent mx-auto px-10">
      {/* Upper heading part */}
      <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 bg-blue-100 rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-blue-600"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
        <span className="text-sm font-bold tracking-wider font-jakarta text-blueone uppercase">
          Skill Accelerator
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-jakarta text-center">
        Skill Development
      </h1>
      <p className="max-w-2xl mx-auto text-lg font-jakarta text-grayone text-center mb-10">
        Industry-aligned skill training programs designed to transform students
        into job-ready professionals.We focus on practical exposure,
        project-based learning, and corporate-oriented curriculum.
      </p>

      {/* Below Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {/* Card1 */}
        <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
             Mechanical Division
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>CAD / CAM Fundamentals</span>
              </li>
             </Reveal>
             <Reveal direction="left" delay={0.2}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
               <span>Machine Design Basics</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Industrial Tools & Applications</span>
              </li>
              </Reveal>
               <Reveal direction="left" delay={0.4}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Production & Manufacturing Concepts</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>

        {/* Card2 */}
         <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
             IT Division
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
              <Reveal direction="left" delay={0.1}>
               <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Web Development</span>
              </li>
              </Reveal>
             <Reveal direction="left" delay={0.2}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Programming Fundamentals</span>
              </li>
             </Reveal>
              <Reveal direction="left" delay={0.3}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Data Analytics</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.4}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Software Tools & Technologies</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>

        {/* Card3 */}
          <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
            Operations Division
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Supply Chain Management</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Production Planning</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Quality Control</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Industrial Operations</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>

          {/* Card4 */}
           <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
             HR Division
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Talent Acquisition</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>HR Analytics</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Corporate Communication</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Employee Engagement Practices</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>
          
          {/* Card5 */}
          <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
             Marketing Division
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Digital Marketing</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Brand Strategy</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Market Research</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Performance Marketing Basics</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>
          
            {/* Card6 */}
          <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
            Sales Division
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
               <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Sales Techniques</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Customer Relationship Management (CRM)</span>
              </li>
              </Reveal>
               <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Business Development</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Negotiation Skills</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>
             
             {/* Card7 */}
          <div className="bg-white group hover:scale-105 hover:border-blueone transition-all duration-200 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
          <div className="grow space-y-3">
            <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-grayone group-hover:text-blueone transition-all duration-300"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover:text-blueone transition-colors duration-300">
             Special Corporate Programs
            </h2>
            </div>
            <p className="uppercase text-sm font-semibold tracking-tighter text-left font-jakarta">Core Module</p>
            <ul className="grid grid-cols-1 gap-2">
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
              <span>Industry-Specific Training</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
                <span>Internship Preparation Modules</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                
               <span>Corporate Readiness Bootcamps</span>
              </li>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
              <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>               
              <span>Live Project Exposure</span>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>

      </div>

    {/* Banner Card */}
    <section className="bg-blueone rounded-3xl p-8  mb-10 mt-5 grid md:grid-cols-2 gap-8 items-center">
    {/* Left Part */}
     <div className='md:p-10 flex flex-col items-start space-y-7'>
        <h3 className='text-2xl font-bold font-jakarta text-white'>What You Get with NavLakshya Skill Division</h3>
        <ul>
           <li className='flex items-center gap-3'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fcd176" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> <path d="M9 12l2 2 4-4" /></svg>
           <span className='text-white text-lg font-jakarta'>Industry Mentorship</span>
          </li>
           <li className='flex items-center gap-3'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fcd176" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> <path d="M9 12l2 2 4-4" /></svg>
           <span className='text-white text-lg font-jakarta'>Internship Recommendations</span>
          </li>
           <li className='flex items-center gap-3'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fcd176" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> <path d="M9 12l2 2 4-4" /></svg>
           <span className='text-white text-lg font-jakarta'>Placement Support</span>
          </li>
           <li className='flex items-center gap-3'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fcd176" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> <path d="M9 12l2 2 4-4" /></svg>
           <span className='text-white text-lg font-jakarta'>Real-World Project Experience</span>
          </li>
           <li className='flex items-center gap-3'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fcd176" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /> <path d="M9 12l2 2 4-4" /></svg>
           <span className='text-white text-lg font-jakarta'>Skill Certification</span>
          </li>
        </ul>
        <a href="#">
        <button className="bg-white px-5 py-2 rounded-full inline-flex items-center justify-center gap-2 transition-all">
          Explore Skill Programs
        <span className="text-xl">→</span>
        </button>
        </a>
     </div>
    {/* Right Part */}
    <div>
    <img src={prog3} className='rounded-2xl shadow-2xl'/>
    </div>
    </section>
    </section>
  );
}

export default SkillDev;
