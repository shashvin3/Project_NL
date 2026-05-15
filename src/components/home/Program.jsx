import bluetick from "../../assets/bluetick.png";
import { Link } from "react-router-dom";

function Program() {
  return (
    <section className="bg-[#edf2f9]/50 py-15 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-jakarta font-bold text-3xl md:text-5xl text-[#0c121a] text-center mb-6">
          🎯Every Stage of Your Career Journey
        </h1>
        <p className="font-jakarta text-center text-lg text-grayone max-w-170 mx-auto mt-4 mb-12">
          Whether you are confused about your future, preparing for
          scholarships, building industry skills, or searching for your first
          job — we have a program designed specifically for your stage.
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
                <h2 className="text-2xl font-bold font-jakarta text-[#0c121a] tracking-tight group-hover/card:text-blueone transition-colors duration-300">
                  AIBMSP Scholarship
                </h2>
                <span className="text-sm font-jakarta text-gray-500 tracking-widest leading-tight block mt-1">
                  National Recognition with Real Scholarship Rewards
                </span>
             <span className="text-blueone font-bold text-md font-jakarta">
                Register at ₹500*
              </span>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">Exclusive of applicable taxes</p>
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-sm font-bold text-[#0c121a] font-jakarta mb-2">
                  Best For:
                </p>
                <p className="text-xs text-grayone leading-relaxed font-jakarta">
                 Students who deserve academic recognition and financial support.
                </p>
              </div>
              <p className="leading-relaxed font-jakarta text-grayone text-sm">
               A national-level scholarship examination that ranks students across India and offers scholarship rewards up to ₹25,000 along with a National Recognition Certificate.
              </p>
            </div>
            <div className="flex items-center p-6 px-0 group">
              <Link
                to="/AIBMSP"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </Link>
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
              <span className="text-sm font-jakarta text-gray-500 tracking-widest leading-tight block mt-1">
                One Session. One Clear Direction.
              </span>
              <span className="text-blueone font-bold text-md font-jakarta">
                Starting at ₹999*
              </span>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">Exclusive of applicable taxes</p>
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-sm font-bold text-[#0c121a] font-jakarta mb-2">
                  Best For:
                </p>
                <p className="text-xs text-grayone leading-relaxed font-jakarta">
                  Students who are unsure which career path is right for them.
                </p>
              </div>

              <p className="leading-relaxed font-jakarta text-grayone text-sm">
                A structured counseling session designed to identify your
                strengths, interests, aptitude, and career alignment — so you
                make decisions with clarity, not confusion.
              </p>
            </div>
            <div className="flex items-center p-6 px-0 group">
              <Link
                to="/career-counselling"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </Link>
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
              <span className="text-sm font-jakarta text-gray-500 tracking-widest leading-tight block mt-1">
              Industry-Focused Skills That Employers Actually Need
              </span>
              <span className="text-blueone font-bold text-md font-jakarta">
                Course Fees: ₹8,000-15,000*
              </span>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">Exclusive of applicable taxes</p>
              <div className="bg-gray-50 rounded-xl px-4 py-2 mt-4">
                <p className="text-sm font-bold text-[#0c121a] font-jakarta mb-2">
                  Best For:
                </p>
                <p className="text-xs text-grayone leading-relaxed font-jakarta">
                  Students who understand that a degree alone is not enough in today's competitive market.
                </p>
              </div>
              <p className="leading-relaxed font-jakarta text-grayone text-sm">
               Hands-on training across six professional domains with live projects, practical learning, and industry-relevant curriculum.
              </p>
             
            </div>
            <div className="flex items-center p-6 px-0 group">
              <Link
                to="/skill-program"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </Link>
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
              <span className="text-sm font-jakarta text-gray-500 tracking-widest leading-tight block mt-1">
               Helping Students Turn Skills Into Careers
              </span>
              <span className="text-blueone font-bold text-md font-jakarta">
                Free for Enrolled Students
              </span>
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-sm font-bold text-[#0c121a] font-jakarta mb-2">
                  Best For:
                </p>
                <p className="text-xs text-grayone leading-relaxed font-jakarta">
                  Students preparing for internships and job opportunities
                </p>
              </div>
              <p className="leading-relaxed font-jakarta text-grayone text-sm">
                Get access to resume building, mock interviews, placement preparation, and hiring opportunities through our employer network.
              </p>            
            </div>
            <div className="flex p-6 px-0 items-center group">
              <Link
                to="/placement-cell"
                className="font-jakarta text-[14px] font-bold text-blueone group-hover:text-[#2d1f01] transition-all duration-200"
              >
                Learn Details
              </Link>
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
      <div className="flex justify-center mt-20">
        <Link
          to="/programs"
          className="relative flex gap-2 font-jakarta text-[14px] font-bold text-blueone"
        >
          <span className="relative flex-col group pb-1">
            View Full Program Details
            <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blueone hidden group-hover:block"></span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-blue-600 animate-chevron mt-0.5"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Program;
