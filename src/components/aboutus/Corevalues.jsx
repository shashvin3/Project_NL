import Reveal from "../common/Reveal";

function Corevalues() {
  return (
    <section className="bg-[#0c121a] py-24 px-15 mb-25">
      <h1 className="text-white text-center text-4xl font-bold mb-4">
        Core Values
      </h1>
      <p className="text-[#fffafc]/60 text-center opacity-80 mb-16">
        The principles that guide every decision we make at NavLakshya:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {/* Card 1 */}
        <Reveal direction="up">
        <div className="bg-white/5 h-full rounded-2xl p-8 border border-white/10 hover:bg-white/10 flex flex-col gap-3">      
           <div className="w-12 h-12 rounded-full bg-blueone/20 flex items-center justify-center"> 
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#005bb5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
          <h4 className="text-xl font-bold font-jakarta mb-3 text-[#fffafc]">
            Transparency
          </h4>
          <p className="text-sm font-jakarta text-[#fffafc]/60 leading-relaxed text-left">
            We maintain complete clarity in our scholarship processes, career
            counseling methodologies, and performance evaluation systems.
          </p>
        </div>
       </Reveal>

        {/* Card 2 */}
        <Reveal direction="up" delay={0.1}>
        <div className="bg-white/5 h-full rounded-2xl p-8 border border-white/10 hover:bg-white/10 flex flex-col gap-3">
        <div className="w-12 h-12 rounded-full bg-blueone/20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#005bb5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="6" />
          </svg>
          </div>
          <h4 className="text-xl font-bold font-jakarta mb-3 text-[#fffafc]">Merit-Based Recognition</h4>
          <p className="text-sm font-jakarta text-[#fffafc]/60 leading-relaxed text-left">
            Talent is rewarded purely based on academic excellence, aptitude
            performance, and skill capability without bias.
          </p>
         </div>
        </Reveal>

        {/* Card 3 */}
        <Reveal direction="up" delay={0.2}>
        <div className="bg-white/5 h-full rounded-2xl p-8 border border-white/10 hover:bg-white/10 flex flex-col gap-3">
        
        <div className="w-12 h-12 rounded-full bg-blueone/20 flex items-center justify-center"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#005bb5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 "
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          </div>
          <h4 className="text-xl font-bold font-jakarta mb-3 text-[#fffafc]"> Industry Alignment</h4>
          <p className="text-sm font-jakarta text-[#fffafc]/60 text-left leading-relaxed">
            Our training programs are designed in collaboration with industry
            professionals to ensure relevance and employability.
          </p>
        </div>
       </Reveal>

        {/* Card 4 */}
        <Reveal direction="up" delay={0.3}>
        <div className="bg-white/5 h-full rounded-2xl p-8 border border-white/10 hover:bg-white/10 flex flex-col gap-3">
        <div className="w-12 h-12 rounded-full bg-blueone/20 flex items-center justify-center"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#005bb5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
          </div>
          <h4 className="text-xl font-bold font-jakarta mb-3 text-[#fffafc]">Student-Centric Approach</h4>
          <p className="text-sm font-jakarta text-[#fffafc]/60 text-left leading-relaxed ">
            Every initiative is crafted with one goal — long-term student career
            success and professional stability.
          </p>
        </div>
       </Reveal>

      </div>
    </section>
  );
}

export default Corevalues;
