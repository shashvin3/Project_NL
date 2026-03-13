import bluetick from "../../assets/bluetick.png";
import { Link } from 'react-router-dom';

function Program() {
  return (
    <section className="bg-[#F2F4F7] py-24">
      <div className="mx-auto px-14">
        <h1 className="font-jakarta font-bold text-3xl md:text-5xl text-[#0c121a] text-center mb-6">
          🎯Our Programs
        </h1>
        <p className="font-jakarta text-center text-lg text-grayone max-w-170 mx-auto mt-4 mb-12">
          Comprehensive career transformation pathways designed to take you from
          classroom brilliance to corporate success.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card1 */}
          <div className="bg-white group/card hover:scale-105 transition-all duration-400 border border-gray-100 rounded-2xl shadow-xl  flex flex-col h-full p-5">
            <div className="grow space-y-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] opacity-80 transition-all duration-300 hover:scale-110 hover:rotate-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-blue-700 group-hover/card:text-blueone relative z-10 transition-all duration-300"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover/card:text-blueone transition-colors duration-300">
                  AIBMSP Scholarship
                </h2>
                <span className="text-xs font-jakarta text-[#9D9FA4] uppercase tracking-widest leading-tight block mt-1">
                  All India Bright Minds Scholarship Program
                </span>
              </div>

              <p className="leading-relaxed font-jakarta text-grayone font-[16px] text-[#9d9fa4">
                A national-level merit-based scholarship exam designed to
                identify and reward talented students across India.
              </p>
              <ul>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span> Merit Recognition</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Financial Scholarships</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>National Level Ranking</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Career Guidance Support</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center group">
              <a
                href="#"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-blue-600 transition-colors duration-300 group-hover:text-[#2d1f01] animate-chevron"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          {/* Card2 */}
          <div className="bg-white group/card hover:scale-105 transition-all duration-400 border border-gray-100 rounded-2xl shadow-xl  p-5 flex flex-col h-full">
            <div className="grow space-y-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-blue-700 group-hover/card:text-blueone relative z-10 transition-all duration-300"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M12 13h4" />
                  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                  <path d="M12 8h8" />
                  <path d="M16 8V5a2 2 0 0 1 2-2" />
                  <circle cx="16" cy="13" r=".5" />
                  <circle cx="18" cy="3" r=".5" />
                  <circle cx="20" cy="21" r=".5" />
                  <circle cx="20" cy="8" r=".5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover/card:text-blueone transition-colors duration-300">
                Career Counseling
              </h2>
              <p className="leading-relaxed font-jakarta text-grayone font-[16px]">
                Personalized psychometric assessment and career roadmap planning
                to help students choose the right career path.
              </p>
              <ul>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Career Aptitude Analysis</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Skill Identification</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span> One-on-One Counseling</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span> Structured Career Roadmap</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center group">
              <a
                href="#"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-blue-600 transition-colors duration-300 group-hover:text-[#2d1f01] animate-chevron"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          {/* Card3 */}
          <div className="bg-white group/card hover:scale-105 transition-all duration-400 border border-gray-100 rounded-2xl shadow-xl flex flex-col h-full p-5">
            <div className="grow space-y-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-blue-700 group-hover/card:text-blueone relative z-10 transition-all duration-300"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover/card:text-blueone transition-colors duration-300">
                Skill Development
              </h2>
              <p className="leading-relaxed font-jakarta text-grayone font-[16px] text-[#9d9fa4">
                Industry-aligned skill training programs designed with corporate
                experts.
              </p>
              <ul className="pb-22">
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Technical Skills</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Soft Skills</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Internship Guidance</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Project-Based Learning</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center group">
              <a
                href="#"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-blue-600 transition-colors duration-300 group-hover:text-[#2d1f01] animate-chevron"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          {/* Card4 */}
          <div className="bg-white group/card hover:scale-105 transition-all duration-400 border border-gray-100 rounded-2xl shadow-xl flex flex-col h-full p-5">
            <div className=" grow space-y-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#E8F1FB] to-[#DCEBFA] transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-blue-700 group-hover/card:text-blueone relative z-10 transition-all duration-300"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover/card:text-blueone transition-colors duration-300">
                Placement Assistance
              </h2>
              <p className="leading-relaxed font-jakarta text-grayone font-[16px] text-[#9d9fa4">
                Helping students transition from classroom to corporate.
              </p>
              <ul className="pb-22">
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Resume Building</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayon]">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Interview Preparation</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Corporate Tie-Ups</span>
                </li>
                <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>Internship & Job Support</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center group">
              <a
                href="#"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-blue-600 transition-colors duration-300 group-hover:text-[#2d1f01] animate-chevron"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* program full details link */}
      <div className="relative flex items-center gap-4 justify-center mt-20">
        <div className="relative group font-jakarta text-[14px] font-bold text-blueone pb-1">
        <Link to="/programs">
          View Full Program Details
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blueone hidden group-hover:block"></span>
         </div> 
        <svg
          xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 " ><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
      </div>
    </section>
  );
}

export default Program;
